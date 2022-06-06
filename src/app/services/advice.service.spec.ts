import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AdviceService } from './advice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdviceService', () => {
  let service: AdviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpClient
      ]
    });
    service = TestBed.inject(AdviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
