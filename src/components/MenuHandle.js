function MenuHandle({ type, label, handleClick }) {

  return (
    <summary
      className={'menu-handle '+(type === 'icon' ? 'icon' : 'text')}
      onClick={handleClick}
    >
      {type === 'icon' ?
        <img src={label} /> :
        <span>{label}</span>
      }
    </summary>
  );
}

export default MenuHandle;
