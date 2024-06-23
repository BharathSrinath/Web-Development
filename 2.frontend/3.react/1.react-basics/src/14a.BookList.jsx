import BookShow from "./14b.BookShow"

export default function BookList({ onEdit, books, onDelete }) {
    const renderedBooks = books.map((book) => {
        return (
            <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
        );
    });

    return <div className="book-list">{renderedBooks}</div>;
}