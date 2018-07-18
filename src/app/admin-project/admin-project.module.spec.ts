import { AdminProjectModule } from './admin-project.module';

describe('AdminProjectModule', () => {
  let adminProjectModule: AdminProjectModule;

  beforeEach(() => {
    adminProjectModule = new AdminProjectModule();
  });

  it('should create an instance', () => {
    expect(adminProjectModule).toBeTruthy();
  });
});
