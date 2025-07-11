import clsx from 'clsx';
import React from 'react';

type TextMessageProps = {
  text: string;
  isUser: boolean;
};

export function TextMessage({ text, isUser }: TextMessageProps) {
  return (
    <div
      className={clsx('flex flex-row gap-2', {
        'justify-end py-2': isUser,
      })}
    >
      <div
        className={clsx('rounded-[16px]', {
          'px-4 py-2 max-w-[90%] ml-4 text-stone--900 bg-[#ededed]': isUser,
          'px-4 py-2 max-w-[90%] mr-4 text-black bg-white': !isUser,
        })}
      >
        {text}
      </div>
    </div>
  );
}
