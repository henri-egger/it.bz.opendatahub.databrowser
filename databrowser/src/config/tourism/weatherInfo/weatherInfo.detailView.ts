import { DetailViewConfig } from '../../../domain/datasetConfig/types';
import { CellComponent } from '../../../domain/cellComponents/types';

export const weatherInfoDetailView: DetailViewConfig = {
  elements: [
    {
      name: 'Evolution',
      slug: 'evolution',
      subcategories: [
        {
          name: '',
          properties: [
            {
              title: 'Date',
              component: CellComponent.DateCell,
              class: 'w-40',
              fields: {
                date: 'Weather.{language}.date',
              },
              params: {
                format: 'do MMMM yyyy',
              },
            },
            {
              title: 'Shortname',
              component: CellComponent.StringCell,
              fields: { text: 'Shortname' },
            },
            {
              title: 'Evolution Title',
              component: CellComponent.StringCell,
              class: 'w-48',
              fields: {
                text: 'Weather.{language}.evolutiontitle',
              },
            },
            {
              title: 'Evolution',
              component: CellComponent.StringCell,
              class: 'w-48',
              fields: {
                text: 'Weather.{language}.evolution',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'Conditions',
      slug: 'conditions',
      subcategories: [
        {
          name: 'Date',
          properties: [
            {
              title: '',
              component: CellComponent.DateCell,
              class: 'w-40',
              fields: {
                date: 'Weather.{language}.Conditions.0.date',
              },
              params: {
                format: 'do MMMM yyyy',
              },
            },
            {
              title: 'Image',
              component: CellComponent.ImageCell,
              class: 'w-40',
              fields: {
                src: 'Weather.{language}.Conditions.0.WeatherImgurl',
              },
              params: {
                width: '80%',
              },
            },
            {
              title: 'Title',
              component: CellComponent.StringCell,
              class: 'w-48',
              fields: {
                text: 'Weather.{language}.Conditions.0.Title',
              },
            },
            {
              title: 'Weather Condition',
              component: CellComponent.StringCell,
              class: 'w-40',
              fields: {
                text: 'Weather.{language}.Conditions.0.WeatherCondition',
              },
            },
            {
              title: 'Weather Description',
              component: CellComponent.StringCell,
              class: 'w-40',
              fields: {
                text: 'Weather.{language}.Conditions.0.Weatherdesc',
              },
            },
            {
              title: 'Temperatures',
              component: CellComponent.StringCell,
              class: 'w-40',
              fields: {
                text: 'Weather.{language}.Conditions.0.Temperatures',
              },
            },
            {
              title: 'Temperature Max',
              component: CellComponent.StringCell,
              class: 'w-40',
              fields: {
                text: 'Weather.{language}.Conditions.0.TempMaxmax',
              },
            },
            {
              title: 'Temperature MaxMin',
              component: CellComponent.StringCell,
              class: 'w-40',
              fields: {
                text: 'Weather.{language}.Conditions.0.TempMaxmin',
              },
            },
            {
              title: 'Temperature MinMax',
              component: CellComponent.StringCell,
              class: 'w-40',
              fields: {
                text: 'Weather.{language}.Conditions.0.TempMinmax',
              },
            },
            {
              title: 'Temperature Min',
              component: CellComponent.StringCell,
              class: 'w-40',
              fields: {
                text: 'Weather.{language}.Conditions.0.TempMinmin',
              },
            },
            {
              title: 'Reliability in %',
              component: CellComponent.StringCell,
              class: 'w-40',
              fields: {
                text: 'Weather.{language}.Conditions.0.Reliability',
              },
            },
            {
              title: 'Bulletin Status',
              component: CellComponent.StringCell,
              class: 'w-40',
              fields: {
                text: 'Weather.{language}.Conditions.0.bulletinStatus',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'Forecast',
      slug: 'forecast',
      subcategories: [
        {
          name: 'Date',
          properties: [
            {
              title: '',
              component: CellComponent.DateCell,
              class: 'w-40',
              fields: {
                date: 'Weather.{language}.Forecast.0.date',
              },
              params: {
                format: 'do MMMM yyyy',
              },
            },
            {
              title: 'Image',
              component: CellComponent.ImageCell,
              class: 'w-40',
              fields: {
                src: 'Weather.{language}.Forecast.0.WeatherImgurl',
              },
              params: {
                width: '15%',
              },
            },
            {
              title: 'Weather Description',
              component: CellComponent.StringCell,
              class: 'w-40',
              fields: {
                text: 'Weather.{language}.Forecast.0.Weatherdesc',
              },
            },
            {
              title: 'Weather Code',
              component: CellComponent.StringCell,
              class: 'w-40',
              fields: {
                text: 'Weather.{language}.Forecast.0.Weathercode',
              },
            },
            {
              title: 'Temperature Max',
              component: CellComponent.StringCell,
              class: 'w-40',
              fields: {
                text: 'Weather.{language}.Forecast.0.TempMaxmax',
              },
            },
            {
              title: 'Temperature MaxMin',
              component: CellComponent.StringCell,
              class: 'w-40',
              fields: {
                text: 'Weather.{language}.Forecast.0.TempMaxmin',
              },
            },
            {
              title: 'Temperature MinMax',
              component: CellComponent.StringCell,
              class: 'w-40',
              fields: {
                text: 'Weather.{language}.Forecast.0.TempMinmin',
              },
            },
            {
              title: 'Reliability in %',
              component: CellComponent.StringCell,
              class: 'w-40',
              fields: {
                text: 'Weather.{language}.Forecast.0.Reliability',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'Mountain Weather',
      slug: 'mountain-weather',
      subcategories: [
        {
          name: 'General',
          properties: [
            {
              title: 'Date',
              component: CellComponent.DateCell,
              class: 'w-40',
              fields: {
                date: 'Weather.{language}.Mountain.0.date',
              },
              params: {
                format: 'do MMMM yyyy',
              },
            },
            {
              title: 'Image',
              component: CellComponent.ImageCell,
              class: 'w-40',
              fields: {
                src: 'Weather.{language}.Mountain.0.MountainImgurl',
              },
              params: {
                width: '80%',
              },
            },

            {
              title: 'Title',
              component: CellComponent.StringCell,
              fields: { text: 'Weather.{language}.Mountain.0.Title' },
            },
            {
              title: 'Conditions',
              component: CellComponent.StringCell,
              fields: { text: 'Weather.{language}.Mountain.0.Conditions' },
            },
            {
              title: 'Weather Description',
              component: CellComponent.StringCell,
              fields: { text: 'Weather.{language}.Mountain.0.Weatherdesc' },
            },
            {
              title: 'Zerolimit',
              component: CellComponent.StringCell,
              fields: { text: 'Weather.{language}.Mountain.0.Zerolimit' },
            },
            {
              title: 'Reliability in %',
              component: CellComponent.StringCell,
              fields: { text: 'Weather.{language}.Mountain.0.Reliability' },
            },
          ],
        },
        {
          name: 'North',
          properties: [
            {
              title: 'Date',
              component: CellComponent.DateCell,
              class: 'w-40',
              fields: {
                date: 'Weather.{language}.Mountain.0.date',
              },
              params: {
                format: 'do MMMM yyyy',
              },
            },
            {
              title: 'Image',
              component: CellComponent.ImageCell,
              class: 'w-40',
              fields: {
                src: 'Weather.{language}.Mountain.0.Northimgurl',
              },
              params: {
                width: '15%',
              },
            },
            {
              title: 'North Code',
              component: CellComponent.StringCell,
              fields: { text: 'Weather.{language}.Mountain.0.Northcode' },
            },
            {
              title: 'North Description',
              component: CellComponent.StringCell,
              fields: { text: 'Weather.{language}.Mountain.0.Northdesc' },
            },
          ],
        },
        {
          name: 'South',
          properties: [
            {
              title: 'Date',
              component: CellComponent.DateCell,
              class: 'w-40',
              fields: {
                date: 'Weather.{language}.Mountain.0.date',
              },
              params: {
                format: 'do MMMM yyyy',
              },
            },
            {
              title: 'Image',
              component: CellComponent.ImageCell,
              class: 'w-40',
              fields: {
                src: 'Weather.{language}.Mountain.0.Southimgurl',
              },
              params: {
                width: '15%',
              },
            },
            {
              title: 'South Code',
              component: CellComponent.StringCell,
              fields: { text: 'Weather.{language}.Mountain.0.Southcode' },
            },
            {
              title: 'South Description',
              component: CellComponent.StringCell,
              fields: { text: 'Weather.{language}.Mountain.0.Southdesc' },
            },
          ],
        },
        {
          name: 'Sunrise and Sunset/Moonrise and Moonset',
          properties: [
            {
              title: 'Date',
              component: CellComponent.DateCell,
              class: 'w-40',
              fields: {
                date: 'Weather.{language}.Mountain.0.date',
              },
              params: {
                format: 'do MMMM yyyy',
              },
            },
            {
              title: 'Sunrise',
              component: CellComponent.StringCell,
              fields: { text: 'Weather.{language}.Mountain.0.Sunrise' },
            },
            {
              title: 'Sunset',
              component: CellComponent.StringCell,
              fields: { text: 'Weather.{language}.Mountain.0.Sunset' },
            },
            {
              title: 'Moonrise',
              component: CellComponent.StringCell,
              fields: { text: 'Weather.{language}.Mountain.0.Moonrise' },
            },
            {
              title: 'Moonset',
              component: CellComponent.StringCell,
              fields: { text: 'Weather.{language}.Mountain.0.Moonset' },
            },
          ],
        },
        {
          name: 'Temperatures',
          properties: [
            {
              title: 'Date',
              component: CellComponent.DateCell,
              class: 'w-40',
              fields: {
                date: 'Weather.{language}.Mountain.0.date',
              },
              params: {
                format: 'do MMMM yyyy',
              },
            },
            {
              title: 'Temp1000',
              component: CellComponent.StringCell,
              fields: { text: 'Weather.{language}.Mountain.0.Temp1000' },
            },
            {
              title: 'Temp2000',
              component: CellComponent.StringCell,
              fields: { text: 'Weather.{language}.Mountain.0.Temp2000' },
            },
            {
              title: 'Temp3000',
              component: CellComponent.StringCell,
              fields: { text: 'Weather.{language}.Mountain.0.Temp3000' },
            },
            {
              title: 'Temp4000',
              component: CellComponent.StringCell,
              fields: { text: 'Weather.{language}.Mountain.0.Temp4000' },
            },
          ],
        },
        {
          name: 'Wind',
          properties: [
            {
              title: 'Date',
              component: CellComponent.DateCell,
              class: 'w-40',
              fields: {
                date: 'Weather.{language}.Mountain.0.date',
              },
              params: {
                format: 'do MMMM yyyy',
              },
            },
            {
              title: 'Image',
              component: CellComponent.ImageCell,
              class: 'w-40',
              fields: {
                src: 'Weather.{language}.Mountain.0.WindImgurl',
              },
              params: {
                width: '15%',
              },
            },
            {
              title: 'Wind Code',
              component: CellComponent.StringCell,
              fields: { text: 'Weather.{language}.Mountain.0.Windcode' },
            },
            {
              title: 'Wind Description',
              component: CellComponent.StringCell,
              fields: { text: 'Weather.{language}.Mountain.0.Winddesc' },
            },
            {
              title: 'Snow Limit',
              component: CellComponent.ArrayCell,
              class: 'w-40',
              fields: {
                items: 'Snowlimit',
              },
              params: {
                separator: ', ',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'Weather in Bolzano/Bozen',
      slug: 'weather-bolzano',
      subcategories: [
        {
          name: 'Date',
          properties: [
            {
              title: '',
              component: CellComponent.DateCell,
              class: 'w-40',
              fields: {
                date: 'Weather.{language}.Stationdata.3.date',
              },
              params: {
                format: 'do MMMM yyyy',
              },
            },
            {
              title: 'Image',
              component: CellComponent.ImageCell,
              class: 'w-40',
              fields: {
                src: 'Weather.{language}.Stationdata.2.WeatherImgUrl',
              },
              params: {
                width: '15%',
              },
            },
            {
              title: 'City Name',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.2.CityName',
              },
            },
            {
              title: 'Weather Code',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.2.WeatherCode',
              },
            },
            {
              title: 'Weather Description',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.2.WeatherDesc',
              },
            },
            {
              title: 'Max Temperature',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.2.MaxTemp',
              },
            },
            {
              title: 'Min Temperature',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.2.MinTemp',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'Weather in Merano/Meran',
      slug: 'weather-merano',
      subcategories: [
        {
          name: 'Date',
          properties: [
            {
              title: '',
              component: CellComponent.DateCell,
              class: 'w-40',
              fields: {
                date: 'Weather.{language}.Stationdata.1.date',
              },
              params: {
                format: 'do MMMM yyyy',
              },
            },
            {
              title: 'Image',
              component: CellComponent.ImageCell,
              class: 'w-40',
              fields: {
                src: 'Weather.{language}.Stationdata.1.WeatherImgUrl',
              },
              params: {
                width: '15%',
              },
            },
            {
              title: 'City Name',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.1.CityName',
              },
            },
            {
              title: 'Weather Code',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.1.WeatherCode',
              },
            },
            {
              title: 'Weather Description',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.1.WeatherDesc',
              },
            },
            {
              title: 'Max Temperature',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.1.MaxTemp',
              },
            },
            {
              title: 'Min Temperature',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.1.MinTemp',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'Weather in Bressanone/Brixen',
      slug: 'weather-bressanone',
      subcategories: [
        {
          name: 'Date',
          properties: [
            {
              title: '',
              component: CellComponent.DateCell,
              class: 'w-40',
              fields: {
                date: 'Weather.{language}.Stationdata.4.date',
              },
              params: {
                format: 'do MMMM yyyy',
              },
            },
            {
              title: 'Image',
              component: CellComponent.ImageCell,
              class: 'w-40',
              fields: {
                src: 'Weather.{language}.Stationdata.4.WeatherImgUrl',
              },
              params: {
                width: '15%',
              },
            },
            {
              title: 'City Name',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.4.CityName',
              },
            },
            {
              title: 'Weather Code',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.4.WeatherCode',
              },
            },
            {
              title: 'Weather Description',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.4.WeatherDesc',
              },
            },
            {
              title: 'Max Temperature',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.4.MaxTemp',
              },
            },
            {
              title: 'Min Temperature',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.4.MinTemp',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'Weather in Brunico/Bruneck',
      slug: 'weather-brunico',
      subcategories: [
        {
          name: 'Date',
          properties: [
            {
              title: '',
              component: CellComponent.DateCell,
              class: 'w-40',
              fields: {
                date: 'Weather.{language}.Stationdata.5.date',
              },
              params: {
                format: 'do MMMM yyyy',
              },
            },
            {
              title: 'Image',
              component: CellComponent.ImageCell,
              class: 'w-40',
              fields: {
                src: 'Weather.{language}.Stationdata.5.WeatherImgUrl',
              },
              params: {
                width: '15%',
              },
            },
            {
              title: 'City Name',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.5.CityName',
              },
            },
            {
              title: 'Weather Code',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.5.WeatherCode',
              },
            },
            {
              title: 'Weather Description',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.5.WeatherDesc',
              },
            },
            {
              title: 'Max Temperature',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.5.MaxTemp',
              },
            },
            {
              title: 'Min Temperature',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.5.MinTemp',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'Weather in Vipiteno/Sterzing',
      slug: 'weather-vipiteno',
      subcategories: [
        {
          name: 'Date',
          properties: [
            {
              title: '',
              component: CellComponent.DateCell,
              class: 'w-40',
              fields: {
                date: 'Weather.{language}.Stationdata.3.date',
              },
              params: {
                format: 'do MMMM yyyy',
              },
            },
            {
              title: 'Image',
              component: CellComponent.ImageCell,
              class: 'w-40',
              fields: {
                src: 'Weather.{language}.Stationdata.3.WeatherImgUrl',
              },
              params: {
                width: '15%',
              },
            },
            {
              title: 'City Name',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.3.CityName',
              },
            },
            {
              title: 'Weather Code',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.3.WeatherCode',
              },
            },
            {
              title: 'Weather Description',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.3.WeatherDesc',
              },
            },
            {
              title: 'Max Temperature',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.3.MaxTemp',
              },
            },
            {
              title: 'Min Temperature',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.3.MinTemp',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'Weather in Silandro/Schlanders',
      slug: 'weather-silandro',
      subcategories: [
        {
          name: 'Date',
          properties: [
            {
              title: '',
              component: CellComponent.DateCell,
              class: 'w-40',
              fields: {
                date: 'Weather.{language}.Stationdata.0.date',
              },
              params: {
                format: 'do MMMM yyyy',
              },
            },
            {
              title: 'Image',
              component: CellComponent.ImageCell,
              class: 'w-40',
              fields: {
                src: 'Weather.{language}.Stationdata.0.WeatherImgUrl',
              },
              params: {
                width: '15%',
              },
            },
            {
              title: 'City Name',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.0.CityName',
              },
            },
            {
              title: 'Weather Code',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.0.WeatherCode',
              },
            },
            {
              title: 'Weather Description',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.0.WeatherDesc',
              },
            },
            {
              title: 'Max Temperature',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.0.MaxTemp',
              },
            },
            {
              title: 'Min Temperature',
              component: CellComponent.StringCell,
              fields: {
                text: 'Weather.{language}.Stationdata.0.MinTemp',
              },
            },
          ],
        },
      ],
    },
  ],
};
