import {
  SCHEMA_USER_CONTEXT,
  SCHEMA_GA4_USER_PARAMS_SCHEMA,
  SCHEMA_CUSTOM_DIMENSION_SCHEMA,
  SCHEMA_CUSTOM_METRIC_SCHEMA,
  SCHEMA_CUSTOM_GROUPS_SCHEMA,
  SCHEMA_EVENT_SCHEMA,
  GA4_EVENT_STRUCTURE,
  GAUA_EVENT_STRUCTURE
} from "../constants/var";

export const GLOBAL_CONTEXT =       {
  tag: "globalContext",
  globalContexts: [
    {
      schema: SCHEMA_USER_CONTEXT,
      data: {
        userId: "%NewuserId%",
        userEmail: "%hashUserEmail%",
        userPhone: "%hashPhone%",
        userDataGoId: "",
      },
    },
    {
      schema: SCHEMA_GA4_USER_PARAMS_SCHEMA ,
      data: {
        "%userParam1%": "%newUserParamValue1%",
        //"%userParam2%" to "%userParamValue2%",
        //"%userParam3%" to "%userParamValue3%",
        // ...
        //"%userParamN%" to "%userParamValueN%",
        // кол-во параметров ограничено размером отправляемых данных в настройках трекера
      },
    },
    {
      schema: SCHEMA_CUSTOM_DIMENSION_SCHEMA,
      data: {
        customDimension1: "%NewValue1%",
        // "customDimension2" to "%Value2%",
        // "customDimension3" to "%Value3%",
        // ....
        // "customDimensionN" to "%ValueN%",
        // кол-во параметров ограничено размером отправляемых данных в настройках трекера
      },
    },
    {
      schema: SCHEMA_CUSTOM_METRIC_SCHEMA,
      data: {
        customMetric1: 123,
        // "customMetric2" to 2,
        // "customMetric3" to 3,
        // ....
        // "customMetricN" to 9000000000,
        // кол-во параметров ограничено размером отправляемых данных в настройках трекера
      },
    },
    {
      schema: SCHEMA_CUSTOM_GROUPS_SCHEMA,
      data: {
        customGroup1: "%NewValue1%",
        // "customGroup2" to "%Value2%",
        // "customGroup3" to "%Value3%",
        // ....
        // "customGroupN" to "%ValueN%",
        // кол-во параметров ограничено размером отправляемых данных в настройках трекера
      },
    },
  ],
}

export const DATA = {
  1: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      event: 'ScreenView', // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      screenName: '%screenNameValue%', //Название экрана: String: Обязательный параметр
      screenPath: '%screenPathValue%', //URI экрана: String: Обязательный параметр

      // В eventContext любые дополнительные параметры просмотра экрана
      // Все значения должны быть типа String
      // Кол-во ограничено настройками трекера на размер запроса
      eventContext: {
        eventContext1: 'eventContextValue1',
        eventContext2: 'eventContextValue2',
        eventContext3: 'eventContextValue3',
      },
    },
  },
  2: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GAUA_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: '%eventName%', // Название события: String: Обязательный параметр
      eventCategory: '%eventCategoryValue%', // Категория события: String: Обязательный параметр: по аналогии с GA UA
      eventAction: '%eventActionValue%', // Действие по события: String: Обязательный параметр: по аналогии с GA UA
      eventLabel: '%eventLabelValue%', // Ярлык события: String: НЕ Обязательный параметр: по аналогии с GA UA
      eventValue: '%eventValueValue%', // Ценность события: String: НЕ Обязательный параметр: по аналогии с GA UA

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметрок ограничено настройками трекера на размер запроса
      eventContext: {
        eventContext1: 'eventContextValue1',
        eventContext2: 'eventContextValue2',
        eventContext3: 'eventContextValue3',
      },
    },
  },
  3: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GA4_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: '%eventName%', // Название события: String: Обязательный параметр

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметров ограничено настройками трекера на размер запроса
      eventParams: {
        '%eventParamsName1$': '%eventParamsValue1',
        '%eventParamsName2%': '%eventParamsValue2%',
        '%eventParamsName3%': '%eventParamsValue3%',
      },
    },
  },
  4: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GAUA_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: '%eventName%', // Название события: String: Обязательный параметр
      eventCategory: '%eventCategoryValue%', // Категория события: String: Обязательный параметр: по аналогии с GA UA
      eventAction: '%eventActionValue%', // Действие по события: String: Обязательный параметр: по аналогии с GA UA
      eventLabel: '%eventLabelValue%', // Ярлык события: String: НЕ Обязательный параметр: по аналогии с GA UA
      eventValue: '%eventValueValue%', // Ценность события: String: НЕ Обязательный параметр: по аналогии с GA UA

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметрок ограничено настройками трекера на размер запроса
      eventContext: {
        eventContext1: 'eventContextValue1',
        eventContext2: 'eventContextValue2',
        eventContext3: 'eventContextValue3',
      },

      // Блок с информацией по ecommerce в структуре  GA UA
      ecommerce: {
        currencyCode: 'RUR', // Валюта: String: НЕ обязательный параметр
        impressions: [
          {
            name: '%product name%', // название продукта: String: обязательный параметр, если не указан id
            id: '%id%', // id продукта: String: обязательный параметр, если не указан name
            price: '%price%', // Цена: String: НЕ обязательный параметр
            brand: '%brand%', // Название бренда: String: НЕ обязательный параметр
            category: '%category%', // Категрия продукта: String: НЕ обязательный параметр
            variant: '%variant%', // Вариант продукта: String: НЕ обязательный параметр
            list: '%list%', // Название показанного списка: String: НЕ обязательный параметр
            position: 1, // Позиция в списке: String: НЕ обязательный параметр
          },
          {
            name: '%product name%', // название продукта: String: обязательный параметр, если не указан id
            id: '%id%', // id продукта: String: обязательный параметр, если не указан name
            price: '%price%', // Цена: String: НЕ обязательный параметр
            brand: '%brand%', // Название бренда: String: НЕ обязательный параметр
            category: '%category%', // Категрия продукта: String: НЕ обязательный параметр
            variant: '%variant%', // Вариант продукта: String: НЕ обязательный параметр
            list: '%list%', // Название показанного списка: String: НЕ обязательный параметр
            position: 1, // Позиция в списке: String: НЕ обязательный параметр
          },
        ],
      },
    },
  },
  5: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GA4_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: 'view_item_list', // Название события: String: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметров ограничено настройками трекера на размер запроса
      eventParams: {
        '%eventParamsName1$': '%eventParamsValue1',
        '%eventParamsName2%': '%eventParamsValue2%',
        '%eventParamsName3%': '%eventParamsValue3%',
      },
      ecommerce: {
        item_list_id: '%item_list_id%', //  ID списка: String: НЕ обязательный параметр
        item_list_name: '%item_list_name%', //  Название списка: String: НЕ обязательный параметр
        items: [
          {
            item_name: '%item_name%', // Название продукта: String: обязательный параметр, если не указан item_id
            item_id: '%item_id%', // ID продукта: String: обязательный параметр, если не указан item_name
            price: 23.5, //  Цена продукта: Float: НЕ обязательный параметр
            item_brand: '%item_brand%', // Бренд продукта: String: НЕ обязательный параметр
            item_category: '%item_category%', // Категория продукта: String: НЕ обязательный параметр
            item_category2: '%item_category2%', // Категория продукта: String: НЕ обязательный параметр
            item_category3: '%item_category3%', // Категория продукта: String: НЕ обязательный параметр
            item_category4: '%item_category4%', // Категория продукта: String: НЕ обязательный параметр
            item_variant: '%item_variant%', // Вариант продукта: String: НЕ обязательный параметр
            promotion_id: '%promotion_id%', // ID промо: String: НЕ обязательный параметр
            promotion_name: '%promotion_name%', // Название промо: String: НЕ обязательный параметр
            creative_name: '%creative_name%', // Название креатива: String: НЕ обязательный параметр
            creative_slot: '%creative_slot%', // Слот креатива: String: НЕ обязательный параметр
            location_id: '%location_id%', // ID локации: String: НЕ обязательный параметр
            item_list_name: '%item_list_name%', // Название списка: String: НЕ обязательный параметр
            item_list_id: '%item_list_id%', // ID списка: String: НЕ обязательный параметр
            index: 1, // Позиция продукта в списке: Int: НЕ обязательный параметр
            quantity: 6, // Кол-во продукта: Int: НЕ обязательный параметр
            affiliation: '%affiliation%', // Поставщик продукта: String: НЕ обязательный параметр
            coupon: '%coupon%', // Купон: String: НЕ обязательный параметр
            discount: 24.5, // Скидка: Float: НЕ обязательный параметр

            // Дополнительные параметры продукта
            // Тип String
            // Кол-во параметров ограничено настройками трекера на размер запроса
            '%customParamName1%': '%customParamValue1', // Кастомный параметр 1: String: НЕ обязательный параметр
            '%customParamNameN%': '%customParamValueN', // Кастомный параметр N: String: НЕ обязательный параметр
          },
        ],
      },
    },
  },
  6: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GAUA_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: '%eventName%', // Название события: String: Обязательный параметр
      eventCategory: '%eventCategoryValue%', // Категория события: String: Обязательный параметр: по аналогии с GA UA
      eventAction: '%eventActionValue%', // Действие по события: String: Обязательный параметр: по аналогии с GA UA
      eventLabel: '%eventLabelValue%', // Ярлык события: String: НЕ Обязательный параметр: по аналогии с GA UA
      eventValue: '%eventValueValue%', // Ценность события: String: НЕ Обязательный параметр: по аналогии с GA UA

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметрок ограничено настройками трекера на размер запроса
      eventContext: {
        eventContext1: 'eventContextValue1',
        eventContext2: 'eventContextValue2',
        eventContext3: 'eventContextValue3',
      },

      // Блок с информацией по ecommerce в структуре  GA UA
      ecommerce: {
        click: {
          actionField: {
            // Не обязательный параметр
            list: '%list%', // Название списка: String: НЕ обязательный параметр
            step: 1, // Шаг в воронке: Int: НЕ обязательный параметр
            option: '%option%', // Опции: String: НЕ обязательный параметр
          },
          currencyCode: 'RUR', // Валюта: String: НЕ обязательный параметр
          products: [
            {
              name: '%product name%', // название продукта: String: обязательный параметр, если не указан id
              id: '%id%', // id продукта: String: обязательный параметр, если не указан name
              price: '%price%', // Цена: String: НЕ обязательный параметр
              brand: '%brand%', // Название бренда: String: НЕ обязательный параметр
              category: '%category%', // Категрия продукта: String: НЕ обязательный параметр
              variant: '%variant%', // Вариант продукта: String: НЕ обязательный параметр
              quantity: 4, // Кол-во продукта: Int: НЕ обязательный параметр
              position: 1, // Позиция в списке: Int: НЕ обязательный параметр
              list: '%list%', // Название показанного списка: String: НЕ обязательный параметр

              // Кастомные параметры
              // Все значения должны быть типа String
              // Кол-во параметрок ограничено настройками трекера на размер запроса
              dimension1: '%dimensionValue1%',

              // Кастомные метрики
              // Все значения должны быть типа Float
              // Кол-во параметрок ограничено настройками трекера на размер запроса
              metric1: 12.4,
            },
          ],
        },
      },
    },
  },
  7: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GA4_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: 'select_item', // Название события: String: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметров ограничено настройками трекера на размер запроса
      eventParams: {
        '%eventParamsName1$': '%eventParamsValue1',
        '%eventParamsName2%': '%eventParamsValue2%',
        '%eventParamsName3%': '%eventParamsValue3%',
      },
      ecommerce: {
        item_list_id: '%item_list_id%', //  ID списка: String: НЕ обязательный параметр
        item_list_name: '%item_list_name%', //  Название списка: String: НЕ обязательный параметр
        items: [
          {
            item_name: '%item_name%', // Название продукта: String: обязательный параметр, если не указан item_id
            item_id: '%item_id%', // ID продукта: String: обязательный параметр, если не указан item_name
            price: 23.5, //  Цена продукта: Float: НЕ обязательный параметр
            item_brand: '%item_brand%', // Бренд продукта: String: НЕ обязательный параметр
            item_category: '%item_category%', // Категория продукта: String: НЕ обязательный параметр
            item_category2: '%item_category2%', // Категория продукта: String: НЕ обязательный параметр
            item_category3: '%item_category3%', // Категория продукта: String: НЕ обязательный параметр
            item_category4: '%item_category4%', // Категория продукта: String: НЕ обязательный параметр
            item_variant: '%item_variant%', // Вариант продукта: String: НЕ обязательный параметр
            promotion_id: '%promotion_id%', // ID промо: String: НЕ обязательный параметр
            promotion_name: '%promotion_name%', // Название промо: String: НЕ обязательный параметр
            creative_name: '%creative_name%', // Название креатива: String: НЕ обязательный параметр
            creative_slot: '%creative_slot%', // Слот креатива: String: НЕ обязательный параметр
            location_id: '%location_id%', // ID локации: String: НЕ обязательный параметр
            item_list_name: '%item_list_name%', // Название списка: String: НЕ обязательный параметр
            item_list_id: '%item_list_id%', // ID списка: String: НЕ обязательный параметр
            index: 1, // Позиция продукта в списке: Int: НЕ обязательный параметр
            quantity: 6, // Кол-во продукта: Int: НЕ обязательный параметр
            affiliation: '%affiliation%', // Поставщик продукта: String: НЕ обязательный параметр
            coupon: '%coupon%', // Купон: String: НЕ обязательный параметр
            discount: 24.5, // Скидка: Float: НЕ обязательный параметр

            // Дополнительные параметры продукта
            // Тип String
            // Кол-во параметров ограничено настройками трекера на размер запроса
            '%customParamName1%': '%customParamValue1', // Кастомный параметр 1: String: НЕ обязательный параметр
            '%customParamNameN%': '%customParamValueN', // Кастомный параметр N: String: НЕ обязательный параметр
          },
        ],
      },
    },
  },
  8: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GAUA_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: '%eventName%', // Название события: String: Обязательный параметр
      eventCategory: '%eventCategoryValue%', // Категория события: String: Обязательный параметр: по аналогии с GA UA
      eventAction: '%eventActionValue%', // Действие по события: String: Обязательный параметр: по аналогии с GA UA
      eventLabel: '%eventLabelValue%', // Ярлык события: String: НЕ Обязательный параметр: по аналогии с GA UA
      eventValue: '%eventValueValue%', // Ценность события: String: НЕ Обязательный параметр: по аналогии с GA UA

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметров ограничено настройками трекера на размер запроса
      eventContext: {
        eventContext1: 'eventContextValue1',
        eventContext2: 'eventContextValue2',
        eventContext3: 'eventContextValue3',
      },

      // Блок с информацией по ecommerce в структуре  GA UA
      ecommerce: {
        detail: {
          actionField: {
            // Не обязательный параметр
            list: '%list%', // Название списка: String: НЕ обязательный параметр
            step: 1, // Шаг в воронке: Int: НЕ обязательный параметр
            option: '%option%', // Опции: String: НЕ обязательный параметр
          },
          products: [
            {
              name: '%product name%', // название продукта: String: обязательный параметр, если не указан id
              id: '%id%', // id продукта: String: обязательный параметр, если не указан name
              price: '%price%', // Цена: String: НЕ обязательный параметр
              brand: '%brand%', // Название бренда: String: НЕ обязательный параметр
              category: '%category%', // Категрия продукта: String: НЕ обязательный параметр
              variant: '%variant%', // Вариант продукта: String: НЕ обязательный параметр
              quantity: 4, // Кол-во продукта: Ште: НЕ обязательный параметр
              position: 1, // Позиция в списке: Int: НЕ обязательный параметр
              list: '%list%', // Название показанного списка: String: НЕ обязательный параметр

              // Кастомные параметры
              // Все значения должны быть типа String
              // Кол-во параметрок ограничено настройками трекера на размер запроса
              dimension1: '%dimensionValue1%',

              // Кастомные метрики
              // Все значения должны быть типа Float
              // Кол-во параметрок ограничено настройками трекера на размер запроса
              metric1: 12.4,
            },
          ],
        },
      },
    },
  },
  9: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GA4_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: 'view_item', // Название события: String: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметров ограничено настройками трекера на размер запроса
      eventParams: {
        '%eventParamsName1$': '%eventParamsValue1',
        '%eventParamsName2%': '%eventParamsValue2%',
        '%eventParamsName3%': '%eventParamsValue3%',
      },
      ecommerce: {
        currency: '%currency%', // Валюта: String: НЕ обязательный параметр
        value: 344.5, // Денежная ценноть события: Float: НЕ обязательный параметр
        items: [
          {
            item_name: '%item_name%', // Название продукта: String: обязательный параметр, если не указан item_id
            item_id: '%item_id%', // ID продукта: String: обязательный параметр, если не указан item_name
            price: 23.5, //  Цена продукта: Float: НЕ обязательный параметр
            item_brand: '%item_brand%', // Бренд продукта: String: НЕ обязательный параметр
            item_category: '%item_category%', // Категория продукта: String: НЕ обязательный параметр
            item_category2: '%item_category2%', // Категория продукта: String: НЕ обязательный параметр
            item_category3: '%item_category3%', // Категория продукта: String: НЕ обязательный параметр
            item_category4: '%item_category4%', // Категория продукта: String: НЕ обязательный параметр
            item_variant: '%item_variant%', // Вариант продукта: String: НЕ обязательный параметр
            promotion_id: '%promotion_id%', // ID промо: String: НЕ обязательный параметр
            promotion_name: '%promotion_name%', // Название промо: String: НЕ обязательный параметр
            creative_name: '%creative_name%', // Название креатива: String: НЕ обязательный параметр
            creative_slot: '%creative_slot%', // Слот креатива: String: НЕ обязательный параметр
            location_id: '%location_id%', // ID локации: String: НЕ обязательный параметр
            item_list_name: '%item_list_name%', // Название списка: String: НЕ обязательный параметр
            item_list_id: '%item_list_id%', // ID списка: String: НЕ обязательный параметр
            index: 1, // Позиция продукта в списке: Int: НЕ обязательный параметр
            quantity: 6, // Кол-во продукта: Int: НЕ обязательный параметр
            affiliation: '%affiliation%', // Поставщик продукта: String: НЕ обязательный параметр
            coupon: '%coupon%', // Купон: String: НЕ обязательный параметр
            discount: 24.5, // Скидка: Float: НЕ обязательный параметр

            // Дополнительные параметры продукта
            // Тип String
            // Кол-во параметров ограничено настройками трекера на размер запроса
            '%customParamName1%': '%customParamValue1', // Кастомный параметр 1: String: НЕ обязательный параметр
            '%customParamNameN%': '%customParamValueN', // Кастомный параметр N: String: НЕ обязательный параметр
          },
        ],
      },
    },
  },
  10: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GAUA_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: '%eventName%', // Название события: String: Обязательный параметр
      eventCategory: '%eventCategoryValue%', // Категория события: String: Обязательный параметр: по аналогии с GA UA
      eventAction: '%eventActionValue%', // Действие по события: String: Обязательный параметр: по аналогии с GA UA
      eventLabel: '%eventLabelValue%', // Ярлык события: String: НЕ Обязательный параметр: по аналогии с GA UA
      eventValue: '%eventValueValue%', // Ценность события: String: НЕ Обязательный параметр: по аналогии с GA UA

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметрок ограничено настройками трекера на размер запроса
      eventContext: {
        eventContext1: 'eventContextValue1',
        eventContext2: 'eventContextValue2',
        eventContext3: 'eventContextValue3',
      },

      // Блок с информацией по ecommerce в структуре  GA UA
      ecommerce: {
        add: {
          actionField: {
            // Не обязательный параметр
            list: '%list%', // Название списка: String: НЕ обязательный параметр
            step: 1, // Шаг в воронке: Int: НЕ обязательный параметр
            option: '%option%', // Опции: String: НЕ обязательный параметр
          },
          currencyCode: 'RUR', // Валюта: String: НЕ обязательный параметр
          products: [
            {
              name: '%product name%', // название продукта: String: обязательный параметр, если не указан id
              id: '%id%', // id продукта: String: обязательный параметр, если не указан name
              price: '%price%', // Цена: String: НЕ обязательный параметр
              brand: '%brand%', // Название бренда: String: НЕ обязательный параметр
              category: '%category%', // Категрия продукта: String: НЕ обязательный параметр
              variant: '%variant%', // Вариант продукта: String: НЕ обязательный параметр
              quantity: 4, // Кол-во продукта: Ште: НЕ обязательный параметр
              position: 1, // Позиция в списке: Int: НЕ обязательный параметр
              list: '%list%', // Название показанного списка: String: НЕ обязательный параметр

              // Кастомные параметры
              // Все значения должны быть типа String
              // Кол-во параметрок ограничено настройками трекера на размер запроса
              dimension1: '%dimensionValue1%',

              // Кастомные метрики
              // Все значения должны быть типа Float
              // Кол-во параметрок ограничено настройками трекера на размер запроса
              metric1: 12.4,
            },
          ],
        },
      },
    },
  },
  11: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GA4_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: 'add_to_cart', // Название события: String: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметров ограничено настройками трекера на размер запроса
      eventParams: {
        '%eventParamsName1$': '%eventParamsValue1',
        '%eventParamsName2%': '%eventParamsValue2%',
        '%eventParamsName3%': '%eventParamsValue3%',
      },
      ecommerce: {
        currency: '%currency%', // Валюта: String: НЕ обязательный параметр
        value: 344.5, // Денежная ценноть события: Float: НЕ обязательный параметр
        items: [
          {
            item_name: '%item_name%', // Название продукта: String: обязательный параметр, если не указан item_id
            item_id: '%item_id%', // ID продукта: String: обязательный параметр, если не указан item_name
            price: 23.5, //  Цена продукта: Float: НЕ обязательный параметр
            item_brand: '%item_brand%', // Бренд продукта: String: НЕ обязательный параметр
            item_category: '%item_category%', // Категория продукта: String: НЕ обязательный параметр
            item_category2: '%item_category2%', // Категория продукта: String: НЕ обязательный параметр
            item_category3: '%item_category3%', // Категория продукта: String: НЕ обязательный параметр
            item_category4: '%item_category4%', // Категория продукта: String: НЕ обязательный параметр
            item_variant: '%item_variant%', // Вариант продукта: String: НЕ обязательный параметр
            promotion_id: '%promotion_id%', // ID промо: String: НЕ обязательный параметр
            promotion_name: '%promotion_name%', // Название промо: String: НЕ обязательный параметр
            creative_name: '%creative_name%', // Название креатива: String: НЕ обязательный параметр
            creative_slot: '%creative_slot%', // Слот креатива: String: НЕ обязательный параметр
            location_id: '%location_id%', // ID локации: String: НЕ обязательный параметр
            item_list_name: '%item_list_name%', // Название списка: String: НЕ обязательный параметр
            item_list_id: '%item_list_id%', // ID списка: String: НЕ обязательный параметр
            index: 1, // Позиция продукта в списке: Int: НЕ обязательный параметр
            quantity: 6, // Кол-во продукта: Int: НЕ обязательный параметр
            affiliation: '%affiliation%', // Поставщик продукта: String: НЕ обязательный параметр
            coupon: '%coupon%', // Купон: String: НЕ обязательный параметр
            discount: 24.5, // Скидка: Float: НЕ обязательный параметр

            // Дополнительные параметры продукта
            // Тип String
            // Кол-во параметров ограничено настройками трекера на размер запроса
            '%customParamName1%': '%customParamValue1', // Кастомный параметр 1: String: НЕ обязательный параметр
            '%customParamNameN%': '%customParamValueN', // Кастомный параметр N: String: НЕ обязательный параметр
          },
        ],
      },
    },
  },
  12: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GAUA_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: '%eventName%', // Название события: String: Обязательный параметр
      eventCategory: '%eventCategoryValue%', // Категория события: String: Обязательный параметр: по аналогии с GA UA
      eventAction: '%eventActionValue%', // Действие по события: String: Обязательный параметр: по аналогии с GA UA
      eventLabel: '%eventLabelValue%', // Ярлык события: String: НЕ Обязательный параметр: по аналогии с GA UA
      eventValue: '%eventValueValue%', // Ценность события: String: НЕ Обязательный параметр: по аналогии с GA UA

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметрок ограничено настройками трекера на размер запроса
      eventContext: {
        eventContext1: 'eventContextValue1',
        eventContext2: 'eventContextValue2',
        eventContext3: 'eventContextValue3',
      },

      // Блок с информацией по ecommerce в структуре  GA UA
      ecommerce: {
        remove: {
          actionField: {
            // Не обязательный параметр
            list: '%list%', // Название списка: String: НЕ обязательный параметр
            step: 1, // Шаг в воронке: Int: НЕ обязательный параметр
            option: '%option%', // Опции: String: НЕ обязательный параметр
          },
          currencyCode: 'RUR', // Валюта: String: НЕ обязательный параметр
          products: [
            {
              name: '%product name%', // название продукта: String: обязательный параметр, если не указан id
              id: '%id%', // id продукта: String: обязательный параметр, если не указан name
              price: '%price%', // Цена: String: НЕ обязательный параметр
              brand: '%brand%', // Название бренда: String: НЕ обязательный параметр
              category: '%category%', // Категрия продукта: String: НЕ обязательный параметр
              variant: '%variant%', // Вариант продукта: String: НЕ обязательный параметр
              quantity: 4, // Кол-во продукта: Ште: НЕ обязательный параметр
              position: 1, // Позиция в списке: Int: НЕ обязательный параметр
              list: '%list%', // Название показанного списка: String: НЕ обязательный параметр

              // Кастомные параметры
              // Все значения должны быть типа String
              // Кол-во параметрок ограничено настройками трекера на размер запроса
              dimension1: '%dimensionValue1%',

              // Кастомные метрики
              // Все значения должны быть типа Float
              // Кол-во параметрок ограничено настройками трекера на размер запроса
              metric1: 12.4,
            },
          ],
        },
      },
    },
  },
  13: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GA4_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: 'remove_from_cart', // Название события: String: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметров ограничено настройками трекера на размер запроса
      eventParams: {
        '%eventParamsName1$': '%eventParamsValue1',
        '%eventParamsName2%': '%eventParamsValue2%',
        '%eventParamsName3%': '%eventParamsValue3%',
      },
      ecommerce: {
        currency: '%currency%', // Валюта: String: НЕ обязательный параметр
        value: 344.5, // Денежная ценноть события: Float: НЕ обязательный параметр
        items: [
          {
            item_name: '%item_name%', // Название продукта: String: обязательный параметр, если не указан item_id
            item_id: '%item_id%', // ID продукта: String: обязательный параметр, если не указан item_name
            price: 23.5, //  Цена продукта: Float: НЕ обязательный параметр
            item_brand: '%item_brand%', // Бренд продукта: String: НЕ обязательный параметр
            item_category: '%item_category%', // Категория продукта: String: НЕ обязательный параметр
            item_category2: '%item_category2%', // Категория продукта: String: НЕ обязательный параметр
            item_category3: '%item_category3%', // Категория продукта: String: НЕ обязательный параметр
            item_category4: '%item_category4%', // Категория продукта: String: НЕ обязательный параметр
            item_variant: '%item_variant%', // Вариант продукта: String: НЕ обязательный параметр
            promotion_id: '%promotion_id%', // ID промо: String: НЕ обязательный параметр
            promotion_name: '%promotion_name%', // Название промо: String: НЕ обязательный параметр
            creative_name: '%creative_name%', // Название креатива: String: НЕ обязательный параметр
            creative_slot: '%creative_slot%', // Слот креатива: String: НЕ обязательный параметр
            location_id: '%location_id%', // ID локации: String: НЕ обязательный параметр
            item_list_name: '%item_list_name%', // Название списка: String: НЕ обязательный параметр
            item_list_id: '%item_list_id%', // ID списка: String: НЕ обязательный параметр
            index: 1, // Позиция продукта в списке: Int: НЕ обязательный параметр
            quantity: 6, // Кол-во продукта: Int: НЕ обязательный параметр
            affiliation: '%affiliation%', // Поставщик продукта: String: НЕ обязательный параметр
            coupon: '%coupon%', // Купон: String: НЕ обязательный параметр
            discount: 24.5, // Скидка: Float: НЕ обязательный параметр

            // Дополнительные параметры продукта
            // Тип String
            // Кол-во параметров ограничено настройками трекера на размер запроса
            '%customParamName1%': '%customParamValue1', // Кастомный параметр 1: String: НЕ обязательный параметр
            '%customParamNameN%': '%customParamValueN', // Кастомный параметр N: String: НЕ обязательный параметр
          },
        ],
      },
    },
  },
  14: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GAUA_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: '%eventName%', // Название события: String: Обязательный параметр
      eventCategory: '%eventCategoryValue%', // Категория события: String: Обязательный параметр: по аналогии с GA UA
      eventAction: '%eventActionValue%', // Действие по события: String: Обязательный параметр: по аналогии с GA UA
      eventLabel: '%eventLabelValue%', // Ярлык события: String: НЕ Обязательный параметр: по аналогии с GA UA
      eventValue: '%eventValueValue%', // Ценность события: String: НЕ Обязательный параметр: по аналогии с GA UA

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметрок ограничено настройками трекера на размер запроса
      eventContext: {
        eventContext1: 'eventContextValue1',
        eventContext2: 'eventContextValue2',
        eventContext3: 'eventContextValue3',
      },

      // Блок с информацией по ecommerce в структуре  GA UA
      ecommerce: {
        checkout: {
          actionField: {
            // Не обязательный параметр
            list: '%list%', // Название списка: String: НЕ обязательный параметр
            step: 1, // Шаг в воронке: Int: НЕ обязательный параметр
            option: '%option%', // Опции: String: НЕ обязательный параметр
          },
          currencyCode: 'RUR', // Валюта: String: НЕ обязательный параметр
          products: [
            {
              name: '%product name%', // название продукта: String: обязательный параметр, если не указан id
              id: '%id%', // id продукта: String: обязательный параметр, если не указан name
              price: '%price%', // Цена: String: НЕ обязательный параметр
              brand: '%brand%', // Название бренда: String: НЕ обязательный параметр
              category: '%category%', // Категрия продукта: String: НЕ обязательный параметр
              variant: '%variant%', // Вариант продукта: String: НЕ обязательный параметр
              quantity: 4, // Кол-во продукта: Int: НЕ обязательный параметр
              position: 1, // Позиция в списке: Int: НЕ обязательный параметр
              list: '%list%', // Название показанного списка: String: НЕ обязательный параметр

              // Кастомные параметры
              // Все значения должны быть типа String
              // Кол-во параметрок ограничено настройками трекера на размер запроса
              dimension1: '%dimensionValue1%',

              // Кастомные метрики
              // Все значения должны быть типа Float
              // Кол-во параметрок ограничено настройками трекера на размер запроса
              metric1: 12.4,
            },
          ],
        },
      },
    },
  },
  15: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GA4_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: 'begin_checkout', // Название события: String: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметров ограничено настройками трекера на размер запроса
      eventParams: {
        '%eventParamsName1$': '%eventParamsValue1',
        '%eventParamsName2%': '%eventParamsValue2%',
        '%eventParamsName3%': '%eventParamsValue3%',
      },
      ecommerce: {
        currency: '%currency%', // Валюта: String: НЕ обязательный параметр
        value: 344.5, // Денежная ценноть события: Float: НЕ обязательный параметр
        coupon: '%coupon%', // Купон: String: НЕ обязательный параметр
        items: [
          {
            item_name: '%item_name%', // Название продукта: String: обязательный параметр, если не указан item_id
            item_id: '%item_id%', // ID продукта: String: обязательный параметр, если не указан item_name
            price: 23.5, //  Цена продукта: Float: НЕ обязательный параметр
            item_brand: '%item_brand%', // Бренд продукта: String: НЕ обязательный параметр
            item_category: '%item_category%', // Категория продукта: String: НЕ обязательный параметр
            item_category2: '%item_category2%', // Категория продукта: String: НЕ обязательный параметр
            item_category3: '%item_category3%', // Категория продукта: String: НЕ обязательный параметр
            item_category4: '%item_category4%', // Категория продукта: String: НЕ обязательный параметр
            item_variant: '%item_variant%', // Вариант продукта: String: НЕ обязательный параметр
            promotion_id: '%promotion_id%', // ID промо: String: НЕ обязательный параметр
            promotion_name: '%promotion_name%', // Название промо: String: НЕ обязательный параметр
            creative_name: '%creative_name%', // Название креатива: String: НЕ обязательный параметр
            creative_slot: '%creative_slot%', // Слот креатива: String: НЕ обязательный параметр
            location_id: '%location_id%', // ID локации: String: НЕ обязательный параметр
            item_list_name: '%item_list_name%', // Название списка: String: НЕ обязательный параметр
            item_list_id: '%item_list_id%', // ID списка: String: НЕ обязательный параметр
            index: 1, // Позиция продукта в списке: Int: НЕ обязательный параметр
            quantity: 6, // Кол-во продукта: Int: НЕ обязательный параметр
            affiliation: '%affiliation%', // Поставщик продукта: String: НЕ обязательный параметр
            coupon: '%coupon%', // Купон: String: НЕ обязательный параметр
            discount: 24.5, // Скидка: Float: НЕ обязательный параметр

            // Дополнительные параметры продукта
            // Тип String
            // Кол-во параметров ограничено настройками трекера на размер запроса
            '%customParamName1%': '%customParamValue1', // Кастомный параметр 1: String: НЕ обязательный параметр
            '%customParamNameN%': '%customParamValueN', // Кастомный параметр N: String: НЕ обязательный параметр
          },
        ],
      },
    },
  },
  16: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GAUA_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: '%eventName%', // Название события: String: Обязательный параметр
      eventCategory: '%eventCategoryValue%', // Категория события: String: Обязательный параметр: по аналогии с GA UA
      eventAction: '%eventActionValue%', // Действие по события: String: Обязательный параметр: по аналогии с GA UA
      eventLabel: '%eventLabelValue%', // Ярлык события: String: НЕ Обязательный параметр: по аналогии с GA UA
      eventValue: '%eventValueValue%', // Ценность события: String: НЕ Обязательный параметр: по аналогии с GA UA

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметрок ограничено настройками трекера на размер запроса
      eventContext: {
        eventContext1: 'eventContextValue1',
        eventContext2: 'eventContextValue2',
        eventContext3: 'eventContextValue3',
      },

      // Блок с информацией по ecommerce в структуре  GA UA
      ecommerce: {
        purchase: {
          actionField: {
            // Не обязательный параметр
            id: '%id%', // ID транзакции: String: обязательный параметр
            affiliation: '%affiliation%', // Поставщик: String: НЕ обязательный параметр
            revenue: 150.12, // Доход от транзакции: Float: НЕ обязательный параметр
            tax: 20.5, // Сумма налогов: Float: НЕ обязательный параметр
            shipping: 20.5, // Стоимость доставки: Float: НЕ обязательный параметр
            coupon: '%coupon%', // Купон: String: обязательный параметр
          },
          currencyCode: 'RUR', // Валюта: String: НЕ обязательный параметр
          products: [
            {
              name: '%product name%', // название продукта: String: обязательный параметр, если не указан id
              id: '%id%', // id продукта: String: обязательный параметр, если не указан name
              price: '%price%', // Цена: String: НЕ обязательный параметр
              brand: '%brand%', // Название бренда: String: НЕ обязательный параметр
              category: '%category%', // Категрия продукта: String: НЕ обязательный параметр
              variant: '%variant%', // Вариант продукта: String: НЕ обязательный параметр
              quantity: 4, // Кол-во продукта: Int: НЕ обязательный параметр
              position: 1, // Позиция в списке: Int: НЕ обязательный параметр
              list: '%list%', // Название показанного списка: String: НЕ обязательный параметр

              // Кастомные параметры
              // Все значения должны быть типа String
              // Кол-во параметрок ограничено настройками трекера на размер запроса
              dimension1: '%dimensionValue1%',

              // Кастомные метрики
              // Все значения должны быть типа Float
              // Кол-во параметрок ограничено настройками трекера на размер запроса
              metric1: 12.4,
            },
          ],
        },
      },
    },
  },
  17: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GA4_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: 'purchase', // Название события: String: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметров ограничено настройками трекера на размер запроса
      eventParams: {
        '%eventParamsName1$': '%eventParamsValue1',
        '%eventParamsName2%': '%eventParamsValue2%',
        '%eventParamsName3%': '%eventParamsValue3%',
      },
      ecommerce: {
        currency: '%currency%', // Валюта: String: НЕ обязательный параметр
        transaction_id: '%transaction_id%', // ID транзакции: String: НЕ обязательный параметр
        value: 344.5, // Сумма транзакции: Float: НЕ обязательный параметр
        coupon: '%coupon%', // Купон: String: НЕ обязательный параметр
        shipping: 12.4, // Стоимость доставки: Float: НЕ обязательный параметр
        tax: 12.4, // Налог: Float: НЕ обязательный параметр
        items: [
          {
            item_name: '%item_name%', // Название продукта: String: обязательный параметр, если не указан item_id
            item_id: '%item_id%', // ID продукта: String: обязательный параметр, если не указан item_name
            price: 23.5, //  Цена продукта: Float: НЕ обязательный параметр
            item_brand: '%item_brand%', // Бренд продукта: String: НЕ обязательный параметр
            item_category: '%item_category%', // Категория продукта: String: НЕ обязательный параметр
            item_category2: '%item_category2%', // Категория продукта: String: НЕ обязательный параметр
            item_category3: '%item_category3%', // Категория продукта: String: НЕ обязательный параметр
            item_category4: '%item_category4%', // Категория продукта: String: НЕ обязательный параметр
            item_variant: '%item_variant%', // Вариант продукта: String: НЕ обязательный параметр
            promotion_id: '%promotion_id%', // ID промо: String: НЕ обязательный параметр
            promotion_name: '%promotion_name%', // Название промо: String: НЕ обязательный параметр
            creative_name: '%creative_name%', // Название креатива: String: НЕ обязательный параметр
            creative_slot: '%creative_slot%', // Слот креатива: String: НЕ обязательный параметр
            location_id: '%location_id%', // ID локации: String: НЕ обязательный параметр
            item_list_name: '%item_list_name%', // Название списка: String: НЕ обязательный параметр
            item_list_id: '%item_list_id%', // ID списка: String: НЕ обязательный параметр
            index: 1, // Позиция продукта в списке: Int: НЕ обязательный параметр
            quantity: 6, // Кол-во продукта: Int: НЕ обязательный параметр
            affiliation: '%affiliation%', // Поставщик продукта: String: НЕ обязательный параметр
            coupon: '%coupon%', // Купон: String: НЕ обязательный параметр
            discount: 24.5, // Скидка: Float: НЕ обязательный параметр

            // Дополнительные параметры продукта
            // Тип String
            // Кол-во параметров ограничено настройками трекера на размер запроса
            '%customParamName1%': '%customParamValue1', // Кастомный параметр 1: String: НЕ обязательный параметр
            '%customParamNameN%': '%customParamValueN', // Кастомный параметр N: String: НЕ обязательный параметр
          },
        ],
      },
    },
  },
  18: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GAUA_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: '%eventName%', // Название события: String: Обязательный параметр
      eventCategory: '%eventCategoryValue%', // Категория события: String: Обязательный параметр: по аналогии с GA UA
      eventAction: '%eventActionValue%', // Действие по события: String: Обязательный параметр: по аналогии с GA UA
      eventLabel: '%eventLabelValue%', // Ярлык события: String: НЕ Обязательный параметр: по аналогии с GA UA
      eventValue: '%eventValueValue%', // Ценность события: String: НЕ Обязательный параметр: по аналогии с GA UA

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметрок ограничено настройками трекера на размер запроса
      eventContext: {
        eventContext1: 'eventContextValue1',
        eventContext2: 'eventContextValue2',
        eventContext3: 'eventContextValue3',
      },

      // Блок с информацией по ecommerce в структуре  GA UA
      ecommerce: {
        refund: {
          actionField: {
            // Не обязательный параметр
            id: '%id%', // ID транзакции: String: обязательный параметр
            affiliation: '%affiliation%', // Поставщик: String: НЕ обязательный параметр
            revenue: 150.12, // Доход от транзакции: Float: НЕ обязательный параметр
            tax: 20.5, // Сумма налогов: Float: НЕ обязательный параметр
            shipping: 20.5, // Стоимость доставки: Float: НЕ обязательный параметр
            coupon: '%coupon%', // Купон: String: обязательный параметр
          },
          currencyCode: 'RUR', // Валюта: String: НЕ обязательный параметр
          products: [
            {
              name: '%product name%', // название продукта: String: обязательный параметр, если не указан id
              id: '%id%', // id продукта: String: обязательный параметр, если не указан name
              price: '%price%', // Цена: String: НЕ обязательный параметр
              brand: '%brand%', // Название бренда: String: НЕ обязательный параметр
              category: '%category%', // Категрия продукта: String: НЕ обязательный параметр
              variant: '%variant%', // Вариант продукта: String: НЕ обязательный параметр
              quantity: 4, // Кол-во продукта: Int: НЕ обязательный параметр
              position: 1, // Позиция в списке: Int: НЕ обязательный параметр

              // Кастомные параметры
              // Все значения должны быть типа String
              // Кол-во параметрок ограничено настройками трекера на размер запроса
              dimension1: '%dimensionValue1%',

              // Кастомные метрики
              // Все значения должны быть типа Float
              // Кол-во параметрок ограничено настройками трекера на размер запроса
              metric1: 12.4,
            },
          ],
        },
      },
    },
  },
  19: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GA4_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: 'refund', // Название события: String: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметров ограничено настройками трекера на размер запроса
      eventParams: {
        '%eventParamsName1$': '%eventParamsValue1',
        '%eventParamsName2%': '%eventParamsValue2%',
        '%eventParamsName3%': '%eventParamsValue3%',
      },
      ecommerce: {
        currency: '%currency%', // Валюта: String: НЕ обязательный параметр
        transaction_id: '%transaction_id%', // ID транзакции: String: НЕ обязательный параметр
        value: 344.5, // Сумма транзакции: Float: НЕ обязательный параметр
        coupon: '%coupon%', // Купон: String: НЕ обязательный параметр
        shipping: 12.4, // Стоимость доставки: Float: НЕ обязательный параметр
        tax: 12.4, // Налог: Float: НЕ обязательный параметр
        items: [
          {
            item_name: '%item_name%', // Название продукта: String: обязательный параметр, если не указан item_id
            item_id: '%item_id%', // ID продукта: String: обязательный параметр, если не указан item_name
            price: 23.5, //  Цена продукта: Float: НЕ обязательный параметр
            item_brand: '%item_brand%', // Бренд продукта: String: НЕ обязательный параметр
            item_category: '%item_category%', // Категория продукта: String: НЕ обязательный параметр
            item_category2: '%item_category2%', // Категория продукта: String: НЕ обязательный параметр
            item_category3: '%item_category3%', // Категория продукта: String: НЕ обязательный параметр
            item_category4: '%item_category4%', // Категория продукта: String: НЕ обязательный параметр
            item_variant: '%item_variant%', // Вариант продукта: String: НЕ обязательный параметр
            promotion_id: '%promotion_id%', // ID промо: String: НЕ обязательный параметр
            promotion_name: '%promotion_name%', // Название промо: String: НЕ обязательный параметр
            creative_name: '%creative_name%', // Название креатива: String: НЕ обязательный параметр
            creative_slot: '%creative_slot%', // Слот креатива: String: НЕ обязательный параметр
            location_id: '%location_id%', // ID локации: String: НЕ обязательный параметр
            item_list_name: '%item_list_name%', // Название списка: String: НЕ обязательный параметр
            item_list_id: '%item_list_id%', // ID списка: String: НЕ обязательный параметр
            index: 1, // Позиция продукта в списке: Int: НЕ обязательный параметр
            quantity: 6, // Кол-во продукта: Int: НЕ обязательный параметр
            affiliation: '%affiliation%', // Поставщик продукта: String: НЕ обязательный параметр
            coupon: '%coupon%', // Купон: String: НЕ обязательный параметр
            discount: 24.5, // Скидка: Float: НЕ обязательный параметр

            // Дополнительные параметры продукта
            // Тип String
            // Кол-во параметров ограничено настройками трекера на размер запроса
            '%customParamName1%': '%customParamValue1', // Кастомный параметр 1: String: НЕ обязательный параметр
            '%customParamNameN%': '%customParamValueN', // Кастомный параметр N: String: НЕ обязательный параметр
          },
        ],
      },
    },
  },
  20: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GAUA_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: '%eventName%', // Название события: String: Обязательный параметр
      eventCategory: '%eventCategoryValue%', // Категория события: String: Обязательный параметр: по аналогии с GA UA
      eventAction: '%eventActionValue%', // Действие по события: String: Обязательный параметр: по аналогии с GA UA
      eventLabel: '%eventLabelValue%', // Ярлык события: String: НЕ Обязательный параметр: по аналогии с GA UA
      eventValue: '%eventValueValue%', // Ценность события: String: НЕ Обязательный параметр: по аналогии с GA UA

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметрок ограничено настройками трекера на размер запроса
      eventContext: {
        eventContext1: 'eventContextValue1',
        eventContext2: 'eventContextValue2',
        eventContext3: 'eventContextValue3',
      },

      // Блок с информацией по ecommerce в структуре  GA UA
      ecommerce: {
        promoView: {
          promotions: [
            {
              name: '%promo name%', // название промо: String: обязательный параметр, если не указан id
              id: '%id%', // id промо: String: обязательный параметр, если не указан name
              creative: '%creative%', // Название креатива: String: НЕ обязательный параметр
              position: '%position%', // Название позиции: String: НЕ обязательный параметр
            },
          ],
        },
      },
    },
  },
  21: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GA4_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: 'view_promotion', // Название события: String: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметров ограничено настройками трекера на размер запроса
      eventParams: {
        '%eventParamsName1$': '%eventParamsValue1',
        '%eventParamsName2%': '%eventParamsValue2%',
        '%eventParamsName3%': '%eventParamsValue3%',
      },
      ecommerce: {
        promotion_id: '%promotion_id%', // ID промо: String: НЕ обязательный параметр
        promotion_name: '%promotion_name%', // Название промо: String: НЕ обязательный параметр
        creative_name: '%creative_name%', // Название креатива: String: НЕ обязательный параметр
        creative_slot: '%creative_slot%', // Название рекламного места: String: НЕ обязательный параметр
        items: [
          {
            item_name: '%item_name%', // Название продукта: String: обязательный параметр, если не указан item_id
            item_id: '%item_id%', // ID продукта: String: обязательный параметр, если не указан item_name
            price: 23.5, //  Цена продукта: Float: НЕ обязательный параметр
            item_brand: '%item_brand%', // Бренд продукта: String: НЕ обязательный параметр
            item_category: '%item_category%', // Категория продукта: String: НЕ обязательный параметр
            item_category2: '%item_category2%', // Категория продукта: String: НЕ обязательный параметр
            item_category3: '%item_category3%', // Категория продукта: String: НЕ обязательный параметр
            item_category4: '%item_category4%', // Категория продукта: String: НЕ обязательный параметр
            item_variant: '%item_variant%', // Вариант продукта: String: НЕ обязательный параметр
            promotion_id: '%promotion_id%', // ID промо: String: НЕ обязательный параметр
            promotion_name: '%promotion_name%', // Название промо: String: НЕ обязательный параметр
            creative_name: '%creative_name%', // Название креатива: String: НЕ обязательный параметр
            creative_slot: '%creative_slot%', // Слот креатива: String: НЕ обязательный параметр
            location_id: '%location_id%', // ID локации: String: НЕ обязательный параметр
            item_list_name: '%item_list_name%', // Название списка: String: НЕ обязательный параметр
            item_list_id: '%item_list_id%', // ID списка: String: НЕ обязательный параметр
            index: 1, // Позиция продукта в списке: Int: НЕ обязательный параметр
            quantity: 6, // Кол-во продукта: Int: НЕ обязательный параметр
            affiliation: '%affiliation%', // Поставщик продукта: String: НЕ обязательный параметр
            coupon: '%coupon%', // Купон: String: НЕ обязательный параметр
            discount: 24.5, // Скидка: Float: НЕ обязательный параметр

            // Дополнительные параметры продукта
            // Тип String
            // Кол-во параметров ограничено настройками трекера на размер запроса
            '%customParamName1%': '%customParamValue1', // Кастомный параметр 1: String: НЕ обязательный параметр
            '%customParamNameN%': '%customParamValueN', // Кастомный параметр N: String: НЕ обязательный параметр
          },
        ],
      },
    },
  },
  22: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GAUA_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: '%eventName%', // Название события: String: Обязательный параметр
      eventCategory: '%eventCategoryValue%', // Категория события: String: Обязательный параметр: по аналогии с GA UA
      eventAction: '%eventActionValue%', // Действие по события: String: Обязательный параметр: по аналогии с GA UA
      eventLabel: '%eventLabelValue%', // Ярлык события: String: НЕ Обязательный параметр: по аналогии с GA UA
      eventValue: '%eventValueValue%', // Ценность события: String: НЕ Обязательный параметр: по аналогии с GA UA

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметрок ограничено настройками трекера на размер запроса
      eventContext: {
        eventContext1: 'eventContextValue1',
        eventContext2: 'eventContextValue2',
        eventContext3: 'eventContextValue3',
      },

      // Блок с информацией по ecommerce в структуре  GA UA
      ecommerce: {
        promoClick: {
          promotions: [
            {
              name: '%promo name%', // название промо: String: обязательный параметр, если не указан id
              id: '%id%', // id промо: String: обязательный параметр, если не указан name
              creative: '%creative%', // Название креатива: String: НЕ обязательный параметр
              position: '%position%', // Название позиции: String: НЕ обязательный параметр
            },
          ],
        },
      },
    },
  },
  23: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GA4_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: 'select_promotion', // Название события: String: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметров ограничено настройками трекера на размер запроса
      eventParams: {
        '%eventParamsName1$': '%eventParamsValue1',
        '%eventParamsName2%': '%eventParamsValue2%',
        '%eventParamsName3%': '%eventParamsValue3%',
      },
      ecommerce: {
        promotion_id: '%promotion_id%', // ID промо: String: НЕ обязательный параметр
        promotion_name: '%promotion_name%', // Название промо: String: НЕ обязательный параметр
        creative_name: '%creative_name%', // Название креатива: String: НЕ обязательный параметр
        creative_slot: '%creative_slot%', // Название рекламного места: String: НЕ обязательный параметр
        items: [
          {
            item_name: '%item_name%', // Название продукта: String: обязательный параметр, если не указан item_id
            item_id: '%item_id%', // ID продукта: String: обязательный параметр, если не указан item_name
            price: 23.5, //  Цена продукта: Float: НЕ обязательный параметр
            item_brand: '%item_brand%', // Бренд продукта: String: НЕ обязательный параметр
            item_category: '%item_category%', // Категория продукта: String: НЕ обязательный параметр
            item_category2: '%item_category2%', // Категория продукта: String: НЕ обязательный параметр
            item_category3: '%item_category3%', // Категория продукта: String: НЕ обязательный параметр
            item_category4: '%item_category4%', // Категория продукта: String: НЕ обязательный параметр
            item_variant: '%item_variant%', // Вариант продукта: String: НЕ обязательный параметр
            promotion_id: '%promotion_id%', // ID промо: String: НЕ обязательный параметр
            promotion_name: '%promotion_name%', // Название промо: String: НЕ обязательный параметр
            creative_name: '%creative_name%', // Название креатива: String: НЕ обязательный параметр
            creative_slot: '%creative_slot%', // Слот креатива: String: НЕ обязательный параметр
            location_id: '%location_id%', // ID локации: String: НЕ обязательный параметр
            item_list_name: '%item_list_name%', // Название списка: String: НЕ обязательный параметр
            item_list_id: '%item_list_id%', // ID списка: String: НЕ обязательный параметр
            index: 1, // Позиция продукта в списке: Int: НЕ обязательный параметр
            quantity: 6, // Кол-во продукта: Int: НЕ обязательный параметр
            affiliation: '%affiliation%', // Поставщик продукта: String: НЕ обязательный параметр
            coupon: '%coupon%', // Купон: String: НЕ обязательный параметр
            discount: 24.5, // Скидка: Float: НЕ обязательный параметр

            // Дополнительные параметры продукта
            // Тип String
            // Кол-во параметров ограничено настройками трекера на размер запроса
            '%customParamName1%': '%customParamValue1', // Кастомный параметр 1: String: НЕ обязательный параметр
            '%customParamNameN%': '%customParamValueN', // Кастомный параметр N: String: НЕ обязательный параметр
          },
        ],
      },
    },
  },
  24: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GA4_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: 'view_cart', // Название события: String: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметров ограничено настройками трекера на размер запроса
      eventParams: {
        '%eventParamsName1$': '%eventParamsValue1',
        '%eventParamsName2%': '%eventParamsValue2%',
        '%eventParamsName3%': '%eventParamsValue3%',
      },
      ecommerce: {
        currency: '%currency%', // Валюта: String: НЕ обязательный параметр
        value: 344.5, // Денежная ценноть события: Float: НЕ обязательный параметр
        items: [
          {
            item_name: '%item_name%', // Название продукта: String: обязательный параметр, если не указан item_id
            item_id: '%item_id%', // ID продукта: String: обязательный параметр, если не указан item_name
            price: 23.5, //  Цена продукта: Float: НЕ обязательный параметр
            item_brand: '%item_brand%', // Бренд продукта: String: НЕ обязательный параметр
            item_category: '%item_category%', // Категория продукта: String: НЕ обязательный параметр
            item_category2: '%item_category2%', // Категория продукта: String: НЕ обязательный параметр
            item_category3: '%item_category3%', // Категория продукта: String: НЕ обязательный параметр
            item_category4: '%item_category4%', // Категория продукта: String: НЕ обязательный параметр
            item_variant: '%item_variant%', // Вариант продукта: String: НЕ обязательный параметр
            promotion_id: '%promotion_id%', // ID промо: String: НЕ обязательный параметр
            promotion_name: '%promotion_name%', // Название промо: String: НЕ обязательный параметр
            creative_name: '%creative_name%', // Название креатива: String: НЕ обязательный параметр
            creative_slot: '%creative_slot%', // Слот креатива: String: НЕ обязательный параметр
            location_id: '%location_id%', // ID локации: String: НЕ обязательный параметр
            item_list_name: '%item_list_name%', // Название списка: String: НЕ обязательный параметр
            item_list_id: '%item_list_id%', // ID списка: String: НЕ обязательный параметр
            index: 1, // Позиция продукта в списке: Int: НЕ обязательный параметр
            quantity: 6, // Кол-во продукта: Int: НЕ обязательный параметр
            affiliation: '%affiliation%', // Поставщик продукта: String: НЕ обязательный параметр
            coupon: '%coupon%', // Купон: String: НЕ обязательный параметр
            discount: 24.5, // Скидка: Float: НЕ обязательный параметр

            // Дополнительные параметры продукта
            // Тип String
            // Кол-во параметров ограничено настройками трекера на размер запроса
            '%customParamName1%': '%customParamValue1', // Кастомный параметр 1: String: НЕ обязательный параметр
            '%customParamNameN%': '%customParamValueN', // Кастомный параметр N: String: НЕ обязательный параметр
          },
        ],
      },
    },
  },
  25: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GA4_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: 'add_to_wishlist', // Название события: String: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметров ограничено настройками трекера на размер запроса
      eventParams: {
        '%eventParamsName1$': '%eventParamsValue1',
        '%eventParamsName2%': '%eventParamsValue2%',
        '%eventParamsName3%': '%eventParamsValue3%',
      },
      ecommerce: {
        currency: '%currency%', // Валюта: String: НЕ обязательный параметр
        value: 344.5, // Денежная ценноть события: Float: НЕ обязательный параметр
        items: [
          {
            item_name: '%item_name%', // Название продукта: String: обязательный параметр, если не указан item_id
            item_id: '%item_id%', // ID продукта: String: обязательный параметр, если не указан item_name
            price: 23.5, //  Цена продукта: Float: НЕ обязательный параметр
            item_brand: '%item_brand%', // Бренд продукта: String: НЕ обязательный параметр
            item_category: '%item_category%', // Категория продукта: String: НЕ обязательный параметр
            item_category2: '%item_category2%', // Категория продукта: String: НЕ обязательный параметр
            item_category3: '%item_category3%', // Категория продукта: String: НЕ обязательный параметр
            item_category4: '%item_category4%', // Категория продукта: String: НЕ обязательный параметр
            item_variant: '%item_variant%', // Вариант продукта: String: НЕ обязательный параметр
            promotion_id: '%promotion_id%', // ID промо: String: НЕ обязательный параметр
            promotion_name: '%promotion_name%', // Название промо: String: НЕ обязательный параметр
            creative_name: '%creative_name%', // Название креатива: String: НЕ обязательный параметр
            creative_slot: '%creative_slot%', // Слот креатива: String: НЕ обязательный параметр
            location_id: '%location_id%', // ID локации: String: НЕ обязательный параметр
            item_list_name: '%item_list_name%', // Название списка: String: НЕ обязательный параметр
            item_list_id: '%item_list_id%', // ID списка: String: НЕ обязательный параметр
            index: 1, // Позиция продукта в списке: Int: НЕ обязательный параметр
            quantity: 6, // Кол-во продукта: Int: НЕ обязательный параметр
            affiliation: '%affiliation%', // Поставщик продукта: String: НЕ обязательный параметр
            coupon: '%coupon%', // Купон: String: НЕ обязательный параметр
            discount: 24.5, // Скидка: Float: НЕ обязательный параметр

            // Дополнительные параметры продукта
            // Тип String
            // Кол-во параметров ограничено настройками трекера на размер запроса
            '%customParamName1%': '%customParamValue1', // Кастомный параметр 1: String: НЕ обязательный параметр
            '%customParamNameN%': '%customParamValueN', // Кастомный параметр N: String: НЕ обязательный параметр
          },
        ],
      },
    },
  },
  26: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GA4_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: 'add_shipping_info', // Название события: String: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметров ограничено настройками трекера на размер запроса
      eventParams: {
        '%eventParamsName1$': '%eventParamsValue1',
        '%eventParamsName2%': '%eventParamsValue2%',
        '%eventParamsName3%': '%eventParamsValue3%',
      },
      ecommerce: {
        currency: '%currency%', // Валюта: String: НЕ обязательный параметр
        value: 344.5, // Денежная ценноть события: Float: НЕ обязательный параметр
        coupon: '%coupon%', // Купон: String: НЕ обязательный параметр
        shipping_tier: '%shipping_tier%', // Категория доставки: String: НЕ обязательный параметр
        items: [
          {
            item_name: '%item_name%', // Название продукта: String: обязательный параметр, если не указан item_id
            item_id: '%item_id%', // ID продукта: String: обязательный параметр, если не указан item_name
            price: 23.5, //  Цена продукта: Float: НЕ обязательный параметр
            item_brand: '%item_brand%', // Бренд продукта: String: НЕ обязательный параметр
            item_category: '%item_category%', // Категория продукта: String: НЕ обязательный параметр
            item_category2: '%item_category2%', // Категория продукта: String: НЕ обязательный параметр
            item_category3: '%item_category3%', // Категория продукта: String: НЕ обязательный параметр
            item_category4: '%item_category4%', // Категория продукта: String: НЕ обязательный параметр
            item_variant: '%item_variant%', // Вариант продукта: String: НЕ обязательный параметр
            promotion_id: '%promotion_id%', // ID промо: String: НЕ обязательный параметр
            promotion_name: '%promotion_name%', // Название промо: String: НЕ обязательный параметр
            creative_name: '%creative_name%', // Название креатива: String: НЕ обязательный параметр
            creative_slot: '%creative_slot%', // Слот креатива: String: НЕ обязательный параметр
            location_id: '%location_id%', // ID локации: String: НЕ обязательный параметр
            item_list_name: '%item_list_name%', // Название списка: String: НЕ обязательный параметр
            item_list_id: '%item_list_id%', // ID списка: String: НЕ обязательный параметр
            index: 1, // Позиция продукта в списке: Int: НЕ обязательный параметр
            quantity: 6, // Кол-во продукта: Int: НЕ обязательный параметр
            affiliation: '%affiliation%', // Поставщик продукта: String: НЕ обязательный параметр
            coupon: '%coupon%', // Купон: String: НЕ обязательный параметр
            discount: 24.5, // Скидка: Float: НЕ обязательный параметр

            // Дополнительные параметры продукта
            // Тип String
            // Кол-во параметров ограничено настройками трекера на размер запроса
            '%customParamName1%': '%customParamValue1', // Кастомный параметр 1: String: НЕ обязательный параметр
            '%customParamNameN%': '%customParamValueN', // Кастомный параметр N: String: НЕ обязательный параметр
          },
        ],
      },
    },
  },
  27: {
    schema: SCHEMA_EVENT_SCHEMA, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
    data: {
      eventStructure: GA4_EVENT_STRUCTURE, // Это константное значение: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ
      event: 'add_payment_info', // Название события: String: НЕ МЕНЯТЬ!!! НЕ УДАЛЯТЬ

      // В eventContext любые дополнительные параметры события
      // Все значения должны быть типа String
      // Кол-во параметров ограничено настройками трекера на размер запроса
      eventParams: {
        '%eventParamsName1$': '%eventParamsValue1',
        '%eventParamsName2%': '%eventParamsValue2%',
        '%eventParamsName3%': '%eventParamsValue3%',
      },
      ecommerce: {
        currency: '%currency%', // Валюта: String: НЕ обязательный параметр
        value: 344.5, // Денежная ценноть события: Float: НЕ обязательный параметр
        coupon: '%coupon%', // Купон: String: НЕ обязательный параметр
        payment_type: '%payment_type%', // Метод оплаты: String: НЕ обязательный параметр
        items: [
          {
            item_name: '%item_name%', // Название продукта: String: обязательный параметр, если не указан item_id
            item_id: '%item_id%', // ID продукта: String: обязательный параметр, если не указан item_name
            price: 23.5, //  Цена продукта: Float: НЕ обязательный параметр
            item_brand: '%item_brand%', // Бренд продукта: String: НЕ обязательный параметр
            item_category: '%item_category%', // Категория продукта: String: НЕ обязательный параметр
            item_category2: '%item_category2%', // Категория продукта: String: НЕ обязательный параметр
            item_category3: '%item_category3%', // Категория продукта: String: НЕ обязательный параметр
            item_category4: '%item_category4%', // Категория продукта: String: НЕ обязательный параметр
            item_variant: '%item_variant%', // Вариант продукта: String: НЕ обязательный параметр
            promotion_id: '%promotion_id%', // ID промо: String: НЕ обязательный параметр
            promotion_name: '%promotion_name%', // Название промо: String: НЕ обязательный параметр
            creative_name: '%creative_name%', // Название креатива: String: НЕ обязательный параметр
            creative_slot: '%creative_slot%', // Слот креатива: String: НЕ обязательный параметр
            location_id: '%location_id%', // ID локации: String: НЕ обязательный параметр
            item_list_name: '%item_list_name%', // Название списка: String: НЕ обязательный параметр
            item_list_id: '%item_list_id%', // ID списка: String: НЕ обязательный параметр
            index: 1, // Позиция продукта в списке: Int: НЕ обязательный параметр
            quantity: 6, // Кол-во продукта: Int: НЕ обязательный параметр
            affiliation: '%affiliation%', // Поставщик продукта: String: НЕ обязательный параметр
            coupon: '%coupon%', // Купон: String: НЕ обязательный параметр
            discount: 24.5, // Скидка: Float: НЕ обязательный параметр

            // Дополнительные параметры продукта
            // Тип String
            // Кол-во параметров ограничено настройками трекера на размер запроса
            '%customParamName1%': '%customParamValue1', // Кастомный параметр 1: String: НЕ обязательный параметр
            '%customParamNameN%': '%customParamValueN', // Кастомный параметр N: String: НЕ обязательный параметр
          },
        ],
      },
    },
  },
};

export default DATA;
