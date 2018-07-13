import { KittenModule } from './kitten.module';

describe('KittenModule', () => {
  let kittenModule: KittenModule;

  beforeEach(() => {
    kittenModule = new KittenModule();
  });

  it('should create an instance', () => {
    expect(kittenModule).toBeTruthy();
  });
});
