
export const IconButton = ({ children, widthCss, bgClr, textSize, textClr, heightCss }) => {

  const defaultCss = 'flex items-center justify-center cursor-pointer rounded-full text-center p-2';

  const c = [
    widthCss ? widthCss : 'w-12',
    bgClr ? bgClr : 'bg-white',
    textSize ? textSize : 'text-2xl',
    textClr ? textClr : '',
    heightCss ? heightCss : 'h-12'
  ];

  return (
    <div className={defaultCss + ' ' + c.join(' ')}>
      {children}
    </div>
  )
}
