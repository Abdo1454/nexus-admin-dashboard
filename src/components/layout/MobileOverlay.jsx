function MobileOverlay({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
      style={{ zIndex: 1040 }}
      onClick={onClose}
    />
  );
}

export default MobileOverlay;