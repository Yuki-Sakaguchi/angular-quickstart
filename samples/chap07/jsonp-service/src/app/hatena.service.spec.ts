import { ReflectiveInjector } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpModule, Jsonp, Response, BaseRequestOptions,
  ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { HatenaService} from './hatena.service';

describe('HatenaService', () => {
  let service: HatenaService;
  let backend: MockBackend;

  beforeEach(() => {
    let injector = ReflectiveInjector.resolveAndCreate([
      MockBackend,
      BaseRequestOptions,
      {
        provide: Jsonp,
        useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
          return new Jsonp(backend, options);
        },
        deps: [ MockBackend, BaseRequestOptions ]
      },
      HatenaService
    ]);
    service = injector.get(HatenaService);
    backend = injector.get(MockBackend);
  });

  it('requestGetメソッド', () => {
    backend.connections.subscribe((conn: MockConnection) => {
      conn.mockRespond(new Response(new ResponseOptions({
        body: {
          count: 5,
          bookmarks: [
            { user: 'yamada', comment: '' },
            { user: 'satoh', comment: 'comment1' },
            { user: 'ohashi', comment: '' },
            { user: 'tanabe', comment: 'comment2' },
            { user: 'gondo', comment: 'comment3' },
          ]
        }
      })));
    });

    service.requestGet('http://www.example.com/').subscribe((result: any) => {
      expect(result).not.toBeNull();
      expect(result.count).toEqual(5);
      expect(result.bookmarks.length).toEqual(5);
      expect(result.bookmarks[0].user).toEqual('yamada');
    });
  });
});
