import { useState, useEffect } from 'react';

interface WeatherData {
  condition: 'sunny' | 'cloudy' | 'rainy' | 'overcast' | 'stormy' | 'partly-cloudy';
  brightness: number;
  saturation: number;
  temperature: number; // Fahrenheit
  windSpeed: number; // mph
  humidity: number; // percentage
  rainIntensity?: number; // 0-1 for rain
}

export function useKnoxvilleWeather() {
  const [weather, setWeather] = useState<WeatherData>({
    condition: 'sunny',
    brightness: 1,
    saturation: 1,
    temperature: 72,
    windSpeed: 5,
    humidity: 60,
    rainIntensity: 0
  });

  const [timeOfDay, setTimeOfDay] = useState({
    hour: 12,
    brightness: 1,
    saturation: 1
  });

  // Smooth transition state
  const [targetWeather, setTargetWeather] = useState<WeatherData | null>(null);
  const [transitionProgress, setTransitionProgress] = useState(1);

  useEffect(() => {
    // Get current time in Knoxville (Eastern Time)
    const updateTime = () => {
      const now = new Date();
      const knoxvilleTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
      const hour = knoxvilleTime.getHours();
      const minute = knoxvilleTime.getMinutes();
      
      let timeBrightness = 1;
      let timeSaturation = 1;

      // More granular time transitions using hours and minutes
      const timeInHours = hour + minute / 60;

      // Pre-dawn: 4am-5am
      if (timeInHours >= 4 && timeInHours < 5) {
        const progress = timeInHours - 4;
        timeBrightness = 0.4 + progress * 0.2; // 0.4 to 0.6
        timeSaturation = 0.6 + progress * 0.1; // 0.6 to 0.7
      }
      // Dawn: 5am-7am (gradual brightening)
      else if (timeInHours >= 5 && timeInHours < 7) {
        const progress = (timeInHours - 5) / 2;
        timeBrightness = 0.6 + progress * 0.45; // 0.6 to 1.05
        timeSaturation = 0.7 + progress * 0.35; // 0.7 to 1.05
      }
      // Morning: 7am-11am (bright and vibrant)
      else if (timeInHours >= 7 && timeInHours < 11) {
        const progress = (timeInHours - 7) / 4;
        timeBrightness = 1.05 + progress * 0.1; // 1.05 to 1.15
        timeSaturation = 1.05 + progress * 0.1; // 1.05 to 1.15
      }
      // Midday: 11am-3pm (brightest, most saturated)
      else if (timeInHours >= 11 && timeInHours < 15) {
        timeBrightness = 1.2;
        timeSaturation = 1.25;
      }
      // Afternoon: 3pm-6pm (gradual dimming)
      else if (timeInHours >= 15 && timeInHours < 18) {
        const progress = (timeInHours - 15) / 3;
        timeBrightness = 1.2 - progress * 0.35; // 1.2 to 0.85
        timeSaturation = 1.25 - progress * 0.3; // 1.25 to 0.95
      }
      // Golden hour: 6pm-7:30pm (warm and saturated)
      else if (timeInHours >= 18 && timeInHours < 19.5) {
        const progress = (timeInHours - 18) / 1.5;
        timeBrightness = 0.85 - progress * 0.25; // 0.85 to 0.6
        timeSaturation = 1.2 + progress * 0.2; // 1.2 to 1.4 (golden hour saturation)
      }
      // Dusk: 7:30pm-9pm (rapid dimming)
      else if (timeInHours >= 19.5 && timeInHours < 21) {
        const progress = (timeInHours - 19.5) / 1.5;
        timeBrightness = 0.6 - progress * 0.15; // 0.6 to 0.45
        timeSaturation = 1.4 - progress * 0.6; // 1.4 to 0.8
      }
      // Night: 9pm-4am (dark and desaturated)
      else {
        timeBrightness = 0.45;
        timeSaturation = 0.65;
      }

      setTimeOfDay({
        hour,
        brightness: timeBrightness,
        saturation: timeSaturation
      });
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 30000); // Update every 30 seconds for smoother transitions

    // Realistic weather patterns based on season and time
    const fetchWeather = async () => {
      try {
        const now = new Date();
        const month = now.getMonth(); // 0-11
        const dayOfYear = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
        const hourOfDay = now.getHours();
        
        // Seasonal temperature ranges for Knoxville, TN
        let baseTemp = 72;
        let tempVariation = 15;
        
        // Winter (Dec, Jan, Feb)
        if (month === 11 || month === 0 || month === 1) {
          baseTemp = 45;
          tempVariation = 10;
        }
        // Spring (Mar, Apr, May)
        else if (month >= 2 && month <= 4) {
          baseTemp = 65;
          tempVariation = 12;
        }
        // Summer (Jun, Jul, Aug)
        else if (month >= 5 && month <= 7) {
          baseTemp = 85;
          tempVariation = 8;
        }
        // Fall (Sep, Oct, Nov)
        else if (month >= 8 && month <= 10) {
          baseTemp = 68;
          tempVariation = 12;
        }
        
        // Daily temperature variation
        const dayTemp = baseTemp + Math.sin(dayOfYear * 0.1) * tempVariation;
        
        // Hourly temperature variation (cooler at night, warmer in afternoon)
        let hourlyModifier = 0;
        if (hourOfDay >= 6 && hourOfDay < 14) {
          hourlyModifier = (hourOfDay - 6) * 2; // +0 to +16 degrees
        } else if (hourOfDay >= 14 && hourOfDay < 20) {
          hourlyModifier = 16 - (hourOfDay - 14) * 2.5; // +16 to +1 degrees
        } else {
          hourlyModifier = -5; // Cooler at night
        }
        
        const temperature = Math.round(dayTemp + hourlyModifier);
        
        // Weather patterns with realistic probabilities
        const weatherSeed = dayOfYear + Math.floor(hourOfDay / 6);
        const random = (Math.sin(weatherSeed * 12.9898) * 43758.5453) % 1;
        
        let condition: WeatherData['condition'];
        let brightness = 1;
        let saturation = 1;
        let windSpeed = 5;
        let humidity = 60;
        let rainIntensity = 0;
        
        // Higher chance of rain in spring and thunderstorms in summer
        const rainChance = month >= 2 && month <= 4 ? 0.3 : (month >= 5 && month <= 7 ? 0.25 : 0.2);
        
        if (random < rainChance) {
          // Rainy weather
          const rainType = Math.sin(weatherSeed * 7.123) % 1;
          if (rainType < 0.3 && month >= 5 && month <= 8) {
            // Summer thunderstorms
            condition = 'stormy';
            brightness = 0.65;
            saturation = 0.6;
            rainIntensity = 0.8 + Math.random() * 0.2;
            windSpeed = 15 + Math.random() * 10;
          } else {
            // Regular rain
            condition = 'rainy';
            brightness = 0.7;
            saturation = 0.65;
            rainIntensity = 0.4 + Math.random() * 0.4;
            windSpeed = 8 + Math.random() * 7;
          }
          humidity = 80 + Math.random() * 15;
        } else if (random < rainChance + 0.25) {
          // Overcast
          condition = 'overcast';
          brightness = 0.75;
          saturation = 0.75;
          windSpeed = 6 + Math.random() * 6;
          humidity = 70 + Math.random() * 15;
        } else if (random < rainChance + 0.45) {
          // Cloudy
          condition = 'cloudy';
          brightness = 0.85;
          saturation = 0.85;
          windSpeed = 5 + Math.random() * 5;
          humidity = 55 + Math.random() * 15;
        } else if (random < rainChance + 0.65) {
          // Partly cloudy
          condition = 'partly-cloudy';
          brightness = 1.05;
          saturation = 1.1;
          windSpeed = 4 + Math.random() * 4;
          humidity = 50 + Math.random() * 15;
        } else {
          // Sunny
          condition = 'sunny';
          brightness = 1.15;
          saturation = 1.2;
          windSpeed = 3 + Math.random() * 4;
          humidity = 45 + Math.random() * 15;
        }
        
        const newWeather = {
          condition,
          brightness,
          saturation,
          temperature,
          windSpeed: Math.round(windSpeed),
          humidity: Math.round(humidity),
          rainIntensity
        };
        
        setTargetWeather(newWeather);
        setTransitionProgress(0);
      } catch (error) {
        console.error('Failed to fetch weather:', error);
      }
    };

    fetchWeather();
    // Check weather every 15 minutes
    const weatherInterval = setInterval(fetchWeather, 900000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(weatherInterval);
    };
  }, []);

  // Smooth weather transitions
  useEffect(() => {
    if (!targetWeather || transitionProgress >= 1) return;

    const transitionInterval = setInterval(() => {
      setTransitionProgress(prev => {
        const next = prev + 0.01; // 100 steps = ~5 seconds for full transition
        if (next >= 1) {
          setWeather(targetWeather);
          return 1;
        }
        
        // Interpolate between current and target weather
        setWeather(current => ({
          condition: next > 0.5 ? targetWeather.condition : current.condition,
          brightness: current.brightness + (targetWeather.brightness - current.brightness) * 0.01,
          saturation: current.saturation + (targetWeather.saturation - current.saturation) * 0.01,
          temperature: Math.round(current.temperature + (targetWeather.temperature - current.temperature) * 0.01),
          windSpeed: Math.round(current.windSpeed + (targetWeather.windSpeed - current.windSpeed) * 0.01),
          humidity: Math.round(current.humidity + (targetWeather.humidity - current.humidity) * 0.01),
          rainIntensity: current.rainIntensity !== undefined && targetWeather.rainIntensity !== undefined
            ? current.rainIntensity + (targetWeather.rainIntensity - current.rainIntensity) * 0.01
            : targetWeather.rainIntensity
        }));
        
        return next;
      });
    }, 50);

    return () => clearInterval(transitionInterval);
  }, [targetWeather, transitionProgress]);

  // Combine time and weather effects
  const combinedBrightness = timeOfDay.brightness * weather.brightness;
  const combinedSaturation = timeOfDay.saturation * weather.saturation;

  return {
    weather: weather.condition,
    hour: timeOfDay.hour,
    brightness: combinedBrightness,
    saturation: combinedSaturation,
    temperature: weather.temperature,
    windSpeed: weather.windSpeed,
    humidity: weather.humidity,
    rainIntensity: weather.rainIntensity || 0,
    filterStyle: `brightness(${combinedBrightness}) saturate(${combinedSaturation})`
  };
}
