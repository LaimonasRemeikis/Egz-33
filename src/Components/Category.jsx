function Category({ category, setDeleteId, setModalData }) {


    return (
      <tr className="list-group-item">
        <td>{category.name}</td>
        <td className="tree-line__buttons">
          <button
            type="button"
            className="btn"
            onClick={() => setDeleteId({ id: category.id })}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
  
  export default Category;
  