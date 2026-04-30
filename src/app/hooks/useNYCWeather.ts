import { useState, useEffect } from 'react';

interface WeatherData {
  condition: 'clear' | 'foggy' | 'rainy' | 'overcast' | 'stormy' | 'partly-cloudy';
  brightness: number;
  saturation: number;
  temperature: number; // Fahrenheit
  windSpeed: number; // mph
  humidity: number; // percentage
  rainIntensity?: number; // 0-1 for rain
}

export function useNYCWeather() {
  const [weather, setWeather] = useState<WeatherData>({
    condition: 'clear',
    brightness: 1,
    saturation: 1,
    temperature: 68,
    windSpeed: 8,
    humidity: 65,
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
    // Get current time in New York City (Eastern Time)
    const updateTime = () => {
      const now = new Date();
      const nycTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
      const hour = nycTime.getHours();
      const minute = nycTime.getMinutes();
      
      let timeBrightness = 1;
      let timeSaturation = 1;

      // More granular time transitions using hours and minutes
      const timeInHours = hour + minute / 60;

      // Pre-dawn: 4am-5am
      if (timeInHours >= 4 && timeInHours < 5) {
        const progress = timeInHours - 4;
        timeBrightness = 0.35 + progress * 0.2; // 0.35 to 0.55 (darker urban environment)
        timeSaturation = 0.55 + progress * 0.1; // 0.55 to 0.65
      }
      // Dawn: 5am-7am (gradual brightening with urban haze)
      else if (timeInHours >= 5 && timeInHours < 7) {
        const progress = (timeInHours - 5) / 2;
        timeBrightness = 0.55 + progress * 0.5; // 0.55 to 1.05
        timeSaturation = 0.65 + progress * 0.4; // 0.65 to 1.05
      }
      // Morning: 7am-11am (bright but slightly less saturated due to urban atmosphere)
      else if (timeInHours >= 7 && timeInHours < 11) {
        const progress = (timeInHours - 7) / 4;
        timeBrightness = 1.05 + progress * 0.1; // 1.05 to 1.15
        timeSaturation = 1.05 + progress * 0.05; // 1.05 to 1.1 (less saturation than nature)
      }
      // Midday: 11am-3pm (brightest)
      else if (timeInHours >= 11 && timeInHours < 15) {
        timeBrightness = 1.18;
        timeSaturation = 1.15; // Slightly less saturated than Knoxville
      }
      // Afternoon: 3pm-6pm (gradual dimming)
      else if (timeInHours >= 15 && timeInHours < 18) {
        const progress = (timeInHours - 15) / 3;
        timeBrightness = 1.18 - progress * 0.38; // 1.18 to 0.8
        timeSaturation = 1.15 - progress * 0.25; // 1.15 to 0.9
      }
      // Golden hour: 6pm-7:30pm (less pronounced in urban setting)
      else if (timeInHours >= 18 && timeInHours < 19.5) {
        const progress = (timeInHours - 18) / 1.5;
        timeBrightness = 0.8 - progress * 0.25; // 0.8 to 0.55
        timeSaturation = 1.1 + progress * 0.15; // 1.1 to 1.25 (muted golden hour)
      }
      // Dusk: 7:30pm-9pm (urban lights start to show)
      else if (timeInHours >= 19.5 && timeInHours < 21) {
        const progress = (timeInHours - 19.5) / 1.5;
        timeBrightness = 0.55 - progress * 0.15; // 0.55 to 0.4
        timeSaturation = 1.25 - progress * 0.55; // 1.25 to 0.7
      }
      // Night: 9pm-4am (darker with city lights)
      else {
        timeBrightness = 0.4;
        timeSaturation = 0.6;
      }

      setTimeOfDay({
        hour,
        brightness: timeBrightness,
        saturation: timeSaturation
      });
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 30000); // Update every 30 seconds

    // Realistic weather patterns for NYC
    const fetchWeather = async () => {
      try {
        const now = new Date();
        const month = now.getMonth(); // 0-11
        const dayOfYear = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
        const hourOfDay = now.getHours();
        
        // Seasonal temperature ranges for New York City
        let baseTemp = 68;
        let tempVariation = 12;
        
        // Winter (Dec, Jan, Feb) - colder than Knoxville
        if (month === 11 || month === 0 || month === 1) {
          baseTemp = 38;
          tempVariation = 8;
        }
        // Spring (Mar, Apr, May)
        else if (month >= 2 && month <= 4) {
          baseTemp = 58;
          tempVariation = 10;
        }
        // Summer (Jun, Jul, Aug) - hot and humid
        else if (month >= 5 && month <= 7) {
          baseTemp = 82;
          tempVariation = 8;
        }
        // Fall (Sep, Oct, Nov)
        else if (month >= 8 && month <= 10) {
          baseTemp = 62;
          tempVariation = 10;
        }
        
        // Daily temperature variation
        const dayTemp = baseTemp + Math.sin((dayOfYear + 2) * 0.1) * tempVariation;
        
        // Hourly temperature variation
        let hourlyModifier = 0;
        if (hourOfDay >= 6 && hourOfDay < 14) {
          hourlyModifier = (hourOfDay - 6) * 2;
        } else if (hourOfDay >= 14 && hourOfDay < 20) {
          hourlyModifier = 16 - (hourOfDay - 14) * 2.5;
        } else {
          hourlyModifier = -4;
        }
        
        const temperature = Math.round(dayTemp + hourlyModifier);
        
        // Weather patterns (NYC has more fog and different patterns)
        const weatherSeed = (dayOfYear + 1) + Math.floor(hourOfDay / 6);
        const random = (Math.sin(weatherSeed * 12.9898) * 43758.5453) % 1;
        
        let condition: WeatherData['condition'];
        let brightness = 1;
        let saturation = 1;
        let windSpeed = 8;
        let humidity = 65;
        let rainIntensity = 0;
        
        // NYC weather patterns - more fog, less thunderstorms
        const rainChance = month >= 2 && month <= 5 ? 0.25 : 0.2;
        const fogChance = (hourOfDay < 8 || hourOfDay > 20) ? 0.15 : 0.05; // More fog at night
        
        if (random < fogChance) {
          // Foggy (common in NYC especially morning/night)
          condition = 'foggy';
          brightness = 0.75;
          saturation = 0.65;
          windSpeed = 2 + Math.random() * 3;
          humidity = 85 + Math.random() * 10;
        } else if (random < fogChance + rainChance) {
          // Rainy weather
          const rainType = Math.sin(weatherSeed * 7.123) % 1;
          if (rainType < 0.15 && month >= 5 && month <= 8) {
            // Occasional summer storms
            condition = 'stormy';
            brightness = 0.65;
            saturation = 0.6;
            rainIntensity = 0.7 + Math.random() * 0.3;
            windSpeed = 18 + Math.random() * 12;
          } else {
            // Regular rain
            condition = 'rainy';
            brightness = 0.7;
            saturation = 0.65;
            rainIntensity = 0.3 + Math.random() * 0.5;
            windSpeed = 10 + Math.random() * 8;
          }
          humidity = 80 + Math.random() * 15;
        } else if (random < fogChance + rainChance + 0.25) {
          // Overcast (common in NYC)
          condition = 'overcast';
          brightness = 0.75;
          saturation = 0.7;
          windSpeed = 7 + Math.random() * 7;
          humidity = 70 + Math.random() * 15;
        } else if (random < fogChance + rainChance + 0.45) {
          // Partly cloudy
          condition = 'partly-cloudy';
          brightness = 0.95;
          saturation = 0.95;
          windSpeed = 6 + Math.random() * 6;
          humidity = 60 + Math.random() * 15;
        } else {
          // Clear
          condition = 'clear';
          brightness = 1.1;
          saturation = 1.1;
          windSpeed = 5 + Math.random() * 5;
          humidity = 55 + Math.random() * 15;
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
        const next = prev + 0.01;
        if (next >= 1) {
          setWeather(targetWeather);
          return 1;
        }
        
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
