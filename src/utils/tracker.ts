import {
  createTracker,
  type ScreenViewProps,
} from "@snowplow/react-native-tracker";

import { COLLECTOR_URL } from "../config/api";
import { CaseId } from "../types";

import CASES from "../constants/cases";
import DATA from "../constants/data";

const tracker = createTracker(
  "datagoSnowplowTracker",
  {
    endpoint: COLLECTOR_URL,
  },
  {
    // Олщие настройки треккера
    trackerConfig: {
      appId: "%YourAppId%", // YourAppId - app_id вашего приложения. будет передаваться в поле trackingId
      base64Encoding: false,
      applicationContext: true,
      platformContext: true,
      geoLocationContext: true,
      sessionContext: true,
      screenContext: true,
      screenViewAutotracking: true,
      lifecycleAutotracking: true,
      installAutotracking: true,
      exceptionAutotracking: true,
    },

    // настройки сессионизации внутри snowplow
    sessionConfig: {
      //The amount of time in seconds before the session id is updated while the app is in the foreground
      foregroundTimeout: 1800,

      //The amount of time in seconds before the session id is updated while the app is in the background
      backgroundTimeout: 1800,
    },

    // Информация о пользователе
    subjectConfig: {
      userId: "%UserId%", // UserId пользователя
    },

    // Конфигурация глобального контекста. Будет отправляться с каждым событием
    gcConfig: [
      {
        tag: "globalContext",
        globalContexts: [
          {
            schema: "iglu:ru.datago/user_context/jsonschema/1-0-0",
            data: {
              userId: "%userId%",
              userEmail: "%hashUserEmail%",
              userPhone: "%hashPhone%",
              userDataGoId: "",
            },
          },
          {
            schema: "iglu:ru.datago/ga4_user_params_context/jsonschema/1-0-0",
            data: {
              "%userParam1%": "%userParamValue1%",
              //"%userParam2%" to "%userParamValue2%",
              //"%userParam3%" to "%userParamValue3%",
              // ...
              //"%userParamN%" to "%userParamValueN%",
              // кол-во параметров ограничено размером отправляемых данных в настройках трекера
            },
          },
          {
            schema: "iglu:ru.datago/custom_dimension/jsonschema/1-0-0",
            data: {
              customDimension1: "%Value1%",
              // "customDimension2" to "%Value2%",
              // "customDimension3" to "%Value3%",
              // ....
              // "customDimensionN" to "%ValueN%",
              // кол-во параметров ограничено размером отправляемых данных в настройках трекера
            },
          },
          {
            schema: "iglu:ru.datago/custom_metric/jsonschema/1-0-0",
            data: {
              customMetric1: 1,
              // "customMetric2" to 2,
              // "customMetric3" to 3,
              // ....
              // "customMetricN" to 9000000000,
              // кол-во параметров ограничено размером отправляемых данных в настройках трекера
            },
          },
          {
            schema: "iglu:ru.datago/custom_group/jsonschema/1-0-0",
            data: {
              customGroup1: "%Value1%",
              // "customGroup2" to "%Value2%",
              // "customGroup3" to "%Value3%",
              // ....
              // "customGroupN" to "%ValueN%",
              // кол-во параметров ограничено размером отправляемых данных в настройках трекера
            },
          },
        ],
      },
    ],
  }
);

export const trackEvent = (eventData) => {
  /*
  eventData: Object: пример в /src/constants/data.ts
  */
  try {
    tracker.trackSelfDescribingEvent(eventData);
  } catch (e) {
    // Do something with error
  }
};

export const trackPageView = (pageData) => {
  /*
  pageData: Object:
    keys:
      pageUrl: required: String: 
      pageTitle: optional: String: 
      referrer: : optional: String: 
  */
  try {
    tracker.trackPageViewEvent(pageData);
  } catch (e) {
    // Do something with error
  }
};

export const updateGlobalContext = (globalContextData) => {
  /*
  globalContextData: Object:
    keys:
      tag: required: String: используйте значение globalContext
      globalContexts: required: list[Objects]: пример в /src/constants/data.ts
  */
  try {
    tracker.removeGlobalContexts("globalContext");
    tracker.addGlobalContexts(globalContextData);
  } catch (e) {
    // Do something with error
  }
};

export const setUserId = (userId) => {
  /*
  userId: required: String:
  */
  try {
    tracker.setUserId(userId);
  } catch (e) {
    // Do something with error
  }
};

export const trackScreenView = (screenData: ScreenViewProps) => {
  /*
  screenData: Object:
    keys:
      name: required: String
      type: optional: String
      transitionType: optional: String
  */
  try {
    tracker.trackScreenViewEvent(screenData);
  } catch (e) {
    // Do something with error
  }
};

export const trackEventByCase = (caseId: CaseId) => {
  const eventCase = CASES.find((c) => c.id === caseId);

  if (eventCase) {
    // @ts-ignore
    tracker.trackSelfDescribingEvent(DATA[caseId]);
  }
};

export const trackEventByCaseWithGlobalContext = (
  caseId: CaseId,
  globalContextData
) => {
  const eventCase = CASES.find((c) => c.id === caseId);

  if (eventCase) {
    // @ts-ignore
    updateGlobalContext(globalContextData);
    trackEvent(DATA[caseId]);
  }
};
