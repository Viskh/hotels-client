export const getHasInputValueChanged = (
  localValue: string | null,
  inputValue: string | null,
) => {
  const hasValueChanged = localValue !== inputValue;
  const areValuesEmpty = !localValue && !inputValue;

  return hasValueChanged && !areValuesEmpty;
};
