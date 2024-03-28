import { before } from 'mocha';
import supertest from 'supertest';
import addContext from 'mochawesome/addContext';
import App from '../app';
import Logger from '../core/logger';
import { AdminValidAuth } from '../interfaces/testcase.interface';

const app = new App();
const request = supertest(app.getServer());

Logger.info('________________________TEST CASES _________________________');

const adminValidAuth: AdminValidAuth = {
  accesstoken: '',
  idtoken: ''
};

before(async function () {
  Logger.info('before function -Trying to connect DB----------------------');
  await new Promise<void>(resolve => setTimeout(() => resolve(), 5000)); // 5 sec wait
  //add extra db connection waiting-time/recheck-conn here
});

describe('Create Test Database / Testcases Started', function () {
  it('Test database connectivity', function (done) {
    addContext(this, `Database created / Testcases Started`);
    done();
  });
});
// ////////////////////////////////////////////////////////////////////////////////////////////////////////

import v1landingPage from './v1-landing-page';
v1landingPage(request, adminValidAuth);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Drop Database Collections / Testcases End', function () {
  it('Delete Database Collections', function (done) {
    addContext(this, `Database droped / Testcases End`);
    done();
  });
});
