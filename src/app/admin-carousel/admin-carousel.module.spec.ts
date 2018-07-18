import { AdminCarouselModule } from './admin-carousel.module';

describe('AdminCarouselModule', () => {
  let adminCarouselModule: AdminCarouselModule;

  beforeEach(() => {
    adminCarouselModule = new AdminCarouselModule();
  });

  it('should create an instance', () => {
    expect(adminCarouselModule).toBeTruthy();
  });
});
