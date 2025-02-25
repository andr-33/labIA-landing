const Sidebar = ({ category, description, tools, isOpen, handleOnClose }) => {
  return (
    <aside
      className={`sidebar fixed top-0 right-0 w-full max-w-sm h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out p-5 shadow-lg overflow-y-auto 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <button
        onClick={handleOnClose}
        className="absolute top-2 right-2 text-2xl cursor-pointer"
      >
        ×
      </button>
      <h2 className="text-2xl font-bold mb-2">{category.replace(/_/g, " ")}</h2>
      <p className="text-gray-300 mb-4">{description}</p>
      <h3 className="text-lg font-semibold mb-2">Herramientas:</h3>
      <ul>
        {tools.length && tools.map((tool, index)=>(
          <li key={index} className="mb-1">
            <a
              href={tool.link}
              target="_blank"
              className="text-sky-400 hover:text-sky-300"
            >
              {tool.name}
            </a>{" "}
            - {tool.description}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;