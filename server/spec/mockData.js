const mockPhotoReponse = ['photo.link', 'photo.link2', 'photo.link3'];
module.exports = {

  mockIdInput: 43430,
  mockPhotoReponse: mockPhotoReponse,
  mockAnswerResponse: [
    {
      answer_id: 8,
      body: "DONT BUY IT! It's bad for the environment",
      date: '1600552162548',
      answerer_name: 'metslover',
      helpfulness: 8
    },
    {
      answer_id: 7,
      body: 'Its the best! Seriously magic fabric',
      date: '1614451524662',
      answerer_name: 'metslover',
      helpfulness: 7
    },
    {
      answer_id: 57,
      body: 'Suede',
      date: '1618159891495',
      answerer_name: 'metslover',
      helpfulness: 7
    },
    {
      answer_id: 5,
      body: "Something pretty soft but I can't be sure",
      date: '1599990560555',
      answerer_name: 'metslover',
      helpfulness: 5
    },
    {
      answer_id: 95,
      body: 'Supposedly suede, but I think its synthetic',
      date: '1600120432219',
      answerer_name: 'metslover',
      helpfulness: 3
    }
  ],

  answerExpectedResults: [
    {
        "answer_id": 8,
        "body": "DONT BUY IT! It's bad for the environment",
        "date": "2020-09-19T21:49:22.548Z",
        "answerer_name": "metslover",
        "helpfulness": 8,
        "photos": mockPhotoReponse
    },
    {
        "answer_id": 7,
        "body": "Its the best! Seriously magic fabric",
        "date": "2021-02-27T18:45:24.662Z",
        "answerer_name": "metslover",
        "helpfulness": 7,
        "photos": mockPhotoReponse
    },
    {
        "answer_id": 57,
        "body": "Suede",
        "date": "2021-04-11T16:51:31.495Z",
        "answerer_name": "metslover",
        "helpfulness": 7,
        "photos": mockPhotoReponse
    },
    {
        "answer_id": 5,
        "body": "Something pretty soft but I can't be sure",
        "date": "2020-09-13T09:49:20.555Z",
        "answerer_name": "metslover",
        "helpfulness": 5,
        "photos": mockPhotoReponse
    },
    {
        "answer_id": 95,
        "body": "Supposedly suede, but I think its synthetic",
        "date": "2020-09-14T21:53:52.219Z",
        "answerer_name": "metslover",
        "helpfulness": 3,
        "photos": mockPhotoReponse
    }
  ],

  mockQuestionResponse: [
    {
      question_id: 3,
      question_body: 'Does this product run big or small?',
      question_date: '1608535907083',
      asker_name: 'jbilas',
      question_helpfulness: 8,
      reported: false
    },
    {
      question_id: 5,
      question_body: 'Can I wash it?',
      question_date: '1608855284662',
      asker_name: 'cleopatra',
      question_helpfulness: 7,
      reported: false
    },
    {
      question_id: 4,
      question_body: 'How long does it last?',
      question_date: '1594341317010',
      asker_name: 'funnygirl',
      question_helpfulness: 6,
      reported: false
    },
    {
      question_id: 1,
      question_body: 'What fabric is the top made of?',
      question_date: '1595884714409',
      asker_name: 'yankeelover',
      question_helpfulness: 2,
      reported: false
    },
    {
      question_id: 3518964,
      question_body: 'Test Question body',
      question_date: '1667500918082',
      asker_name: 'TestName',
      question_helpfulness: 0,
      reported: false
    }
  ],

  questionExpectedResults: [{
    "question_id": 3,
    "question_body": "Does this product run big or small?",
    "question_date": "2020-12-21T07:31:47.083Z",
    "asker_name": "jbilas",
    "question_helpfulness": 8,
    "reported": false,
    "answers": {}
  },
  {
    "question_id": 5,
    "question_body": "Can I wash it?",
    "question_date": "2020-12-25T00:14:44.662Z",
    "asker_name": "cleopatra",
    "question_helpfulness": 7,
    "reported": false,
    "answers": {
      "46": {
        "body": "I've thrown it in the wash and it seems fine",
        "date": "2020-11-22T05:27:23.272Z",
        "answerer_name": "marcanthony",
        "helpfulness": 8,
        "photos": [],
        "id": 46
      },
      "64": {
        "body": "It says not to",
        "date": "2020-05-05T02:15:50.162Z",
        "answerer_name": "ceasar",
        "helpfulness": 0,
        "photos": [],
        "id": 64
      },
      "96": {
        "body": "I wouldn't machine wash it",
        "date": "2020-05-27T13:03:41.205Z",
        "answerer_name": "ceasar",
        "helpfulness": 0,
        "photos": [],
        "id": 96
      },
      "101": {
        "body": "Only if you want to ruin it!",
        "date": "2020-05-27T13:03:41.205Z",
        "answerer_name": "ceasar",
        "helpfulness": 5,
        "photos": [],
        "id": 101
      },
      "107": {
        "body": "Yes",
        "date": "2021-01-13T08:47:26.863Z",
        "answerer_name": "Seller",
        "helpfulness": 4,
        "photos": [],
        "id": 107
      }
    }
  },
  {
    "question_id": 4,
    "question_body": "How long does it last?",
    "question_date": "2020-07-10T00:35:17.010Z",
    "asker_name": "funnygirl",
    "question_helpfulness": 6,
    "reported": false,
    "answers": {
      "65": {
        "body": "It runs small",
        "date": "2020-11-19T11:11:47.205Z",
        "answerer_name": "dschulman",
        "helpfulness": 1,
        "photos": [
          {
            "id": 14,
            "url": "https://images.unsplash.com/photo-1470116892389-0de5d9770b2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
          },
          {
            "id": 15,
            "url": "https://images.unsplash.com/photo-1536922645426-5d658ab49b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          }
        ],
        "id": 65
      },
      "89": {
        "body": "Showing no wear after a few months!",
        "date": "2020-09-02T23:33:29.530Z",
        "answerer_name": "sillyguy",
        "helpfulness": 8,
        "photos": [],
        "id": 89
      }
    }
  },
  {
    "question_id": 1,
    "question_body": "What fabric is the top made of?",
    "question_date": "2020-07-27T21:18:34.409Z",
    "asker_name": "yankeelover",
    "question_helpfulness": 2,
    "reported": false,
    "answers": {
      "5": {
        "body": "Something pretty soft but I can't be sure",
        "date": "2020-09-13T09:49:20.555Z",
        "answerer_name": "metslover",
        "helpfulness": 5,
        "photos": [
          {
            "id": 1,
            "url": "https://images.unsplash.com/photo-1530519729491-aea5b51d1ee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
          },
          {
            "id": 2,
            "url": "https://images.unsplash.com/photo-1511127088257-53ccfcc769fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          },
          {
            "id": 3,
            "url": "https://images.unsplash.com/photo-1500603720222-eb7a1f997356?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80"
          }
        ],
        "id": 5
      },
      "7": {
        "body": "Its the best! Seriously magic fabric",
        "date": "2021-02-27T18:45:24.662Z",
        "answerer_name": "metslover",
        "helpfulness": 7,
        "photos": [],
        "id": 7
      },
      "8": {
        "body": "DONT BUY IT! It's bad for the environment",
        "date": "2020-09-19T21:49:22.548Z",
        "answerer_name": "metslover",
        "helpfulness": 8,
        "photos": [],
        "id": 8
      },
      "57": {
        "body": "Suede",
        "date": "2021-04-11T16:51:31.495Z",
        "answerer_name": "metslover",
        "helpfulness": 7,
        "photos": [],
        "id": 57
      },
      "95": {
        "body": "Supposedly suede, but I think its synthetic",
        "date": "2020-09-14T21:53:52.219Z",
        "answerer_name": "metslover",
        "helpfulness": 3,
        "photos": [],
        "id": 95
      }
    }
  },
  {
    "question_id": 3518970,
    "question_body": "QUESTION BODY",
    "question_date": "2022-11-04T00:03:02.999Z",
    "asker_name": "QUESTION NAME",
    "question_helpfulness": 0,
    "reported": false,
    "answers": {}
  }],
}