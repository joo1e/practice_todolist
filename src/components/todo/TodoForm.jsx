/* eslint-disable react/prop-types */
//uncontrolled component
const TodoForm = ({ onSubmitTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.dir(e.target);
    console.log("title :>> ", e.target.title.value);

    const title = e.target.title.value;
    const content = e.target.content.value;

    onSubmitTodo({
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    });

    // e.targe.reset();
  };

  return (
    // form 테그를 쓴 이유 : 제출버튼을 굳이 누르지 않고 엔터만 눌러도 제출이 됨
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="제목" name="title" />
      <input type="text" placeholder="내용" name="content" />
      <button type="submit">제출</button>
    </form>
  );
};

export default TodoForm;
