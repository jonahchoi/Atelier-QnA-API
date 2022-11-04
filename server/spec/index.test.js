const model = require('../models');
const pool = require('../db');
const mockData = require('./mockData.js');

jest.mock('../db', () => ({ query: jest.fn() }));

describe('Server-side model testing', () => {

  it('getPhotos should return correct photos array', async () => {
    pool.query.mockImplementation(()=> ({rows: mockData.mockPhotoReponse}));

    const response = await model.getPhotos(mockData.mockIdInput);

    expect(response).toBe(mockData.mockPhotoReponse);
  });

  it('getAnswers should return answers and photos', async () => {

    pool.query.mockImplementation((q)=> {
      if(/answers/.test(q)){
        return {rows: mockData.mockAnswerResponse}
      } else if (/photos/.test(q)) {
        return {rows: mockData.mockPhotoReponse}
      }
    });
    const expected = {
      question: mockData.mockIdInput,
      page: 1,
      count: 5,
      results: mockData.answerExpectedResults
    }

    const response = await model.getAnswers(mockData.mockIdInput);

    expect(response).toEqual(expected);
  });

  //doesn't work
  xit('getQuestions should return correct questions object', async () => {
    pool.query.mockImplementation((q) => {
      if (/questions/.test(q)) {
        return {rows: mockData.mockQuestionResponse}
      } else if (/answers/.test(q)){
        return {rows: mockData.mockAnswerResponse}
      } else if (/photos/.test(q)) {
        return {rows: mockData.mockPhotoReponse}
      }
    });
    const expected = {
      product_id: mockData.mockIdInput,
      results: mockData.questionExpectedResults
    }

    const response = await model.getQuestions(mockData.mockIdInput);

    expect(response).toEqual(expected);
  });
});
