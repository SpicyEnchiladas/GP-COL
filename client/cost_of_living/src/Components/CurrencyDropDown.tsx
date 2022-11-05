import React, { useEffect, useState } from 'react';

type DropDownProps = {
    currenciesCode: string[];
    showDropDown: boolean;
    toggleDropDown: Function;
    currencySelection: Function;
  };


const DropDown: React.FC<DropDownProps> = ({
  currenciesCode,
  currencySelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  //handle passing currency back to parent component
  const onClickHandler = (currency: string): void => {
    currencySelection(currency);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {currenciesCode.map(
          ( currency: string, index: number): JSX.Element => {
            return (
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(currency);
                }}
              >
                {currency}
              </p>
            );
          }
        )}
      </div>
    </>
  );
};

export default DropDown;
