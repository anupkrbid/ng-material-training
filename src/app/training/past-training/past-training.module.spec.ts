import { PastTrainingModule } from './past-training.module';

describe('PastTrainingModule', () => {
  let pastTrainingModule: PastTrainingModule;

  beforeEach(() => {
    pastTrainingModule = new PastTrainingModule();
  });

  it('should create an instance', () => {
    expect(pastTrainingModule).toBeTruthy();
  });
});
