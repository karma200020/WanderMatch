import { TestBed } from '@angular/core/testing';

import { ChatGptService } from './chatgpt.service';

describe('ChatgptService', () => {
  let service: ChatGptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatGptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
