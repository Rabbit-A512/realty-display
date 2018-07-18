import { AdminMessageModule } from './admin-message.module';

describe('AdminMessageModule', () => {
  let adminMessageModule: AdminMessageModule;

  beforeEach(() => {
    adminMessageModule = new AdminMessageModule();
  });

  it('should create an instance', () => {
    expect(adminMessageModule).toBeTruthy();
  });
});
