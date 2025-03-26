import React, { useId, useState } from 'react';

import { HiddenCheckbox, SwitchLabel, ToggleContainer } from './Switch.styled';

export default function ToggleSwitch({ initial = false, onToggle }) {
  const id = useId();
  const [isActive, setIsActive] = useState(initial);

  const handleChange = () => {
    setIsActive((prev) => !prev);
    if (onToggle) onToggle(!isActive); // 상태 변경 시 부모 컴포넌트에 전달
  };
  return (
    <ToggleContainer>
      <HiddenCheckbox type="checkbox" id={id} checked={isActive} onChange={handleChange} />
      <SwitchLabel htmlFor={id} isActive={isActive} />
    </ToggleContainer>
  );
}
