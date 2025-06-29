import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD:Silicon_proj_Fullstack/src/app/teams/team10/github.service.spec.ts
import { GitHubService} from './github.service';

describe('GithubService', () => {
  let service: GitHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitHubService);
=======
import { StudentService } from './student.service';

describe('StudentService', () => {
  let service: StudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentService);
>>>>>>> main:Silicon_proj_Fullstack/src/app/teams/team1/student.service.spec.ts
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

