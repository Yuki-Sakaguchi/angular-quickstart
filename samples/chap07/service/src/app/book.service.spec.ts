import { BookService } from './book.service';

describe('BookServiceのテスト', () => {
  let service: BookService;

  beforeEach(() => {
    service = new BookService();
  });

  it('getBooksメソッドの動作', () => {
    let books = service.getBooks();
    expect(books.length).toEqual(5);
    expect(books[0].title).toEqual('改訂新版JavaScript本格入門');
  });
});