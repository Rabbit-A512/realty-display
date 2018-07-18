import { AdminHouseModule } from './admin-house.module';

describe('AdminHouseModule', () => {
  let adminHouseModule: AdminHouseModule;

  beforeEach(() => {
    adminHouseModule = new AdminHouseModule();
  });

  it('should create an instance', () => {
    expect(adminHouseModule).toBeTruthy();
  });
});
