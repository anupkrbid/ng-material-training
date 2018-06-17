import { NewTrainingModule } from './new-training.module';

describe('NewTrainingModule', () => {
  let newTrainingModule: NewTrainingModule;

  beforeEach(() => {
    newTrainingModule = new NewTrainingModule();
  });

  it('should create an instance', () => {
    expect(newTrainingModule).toBeTruthy();
  });
});
