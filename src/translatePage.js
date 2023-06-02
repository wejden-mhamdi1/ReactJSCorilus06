import axios from 'axios';

const { v4: uuidv4 } = require('uuid');

const translatePage = async (pageContent, targetLanguage) => {
  const subscriptionKey = 'Y1bcbda9238424dd9ba3bc5ab6871cd4f';
  const endpoint = 'https://api.cognitive.microsofttranslator.com/';

  const location = 'westus2';

  try {
    const response = await axios({
      baseURL: endpoint,
      url: '/translate',
      method: 'post',
      headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString(),
      },
      params: {
        'api-version': '3.0',
        'from': 'fr',
        'to': [targetLanguage],
      },
      data: [{
        'text': pageContent,
      }],
      responseType: 'json',
    });

    const translation = response.data[0]?.translations[0]?.text;
    console.log(JSON.stringify(response.data, null, 4));
    return translation;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default translatePage;
