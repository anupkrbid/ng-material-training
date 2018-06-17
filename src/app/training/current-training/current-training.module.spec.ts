import { CurrentTrainingModule } from './current-training.module';

describe('CurrentTrainingModule', () => {
  let currentTrainingModule: CurrentTrainingModule;

  beforeEach(() => {
    currentTrainingModule = new CurrentTrainingModule();
  });

  it('should create an instance', () => {
    expect(currentTrainingModule).toBeTruthy();
  });
});
