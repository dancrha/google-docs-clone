import { Button, Icon } from "@material-tailwind/react";

function Header() {
  return (
    <div className='flex items-center '>
      <h1>hi</h1>
      <Button
        color='blue'
        buttonType='outline'
        rounded={true}
        iconOnly={true}
        ripple='dark'
        className='md:inline-flex h-20 w-20 border-0'
      >
        <Icon name='menu' size='3xl' />
      </Button>
      <Icon name='description' size='5xl' color='blue' />
    </div>
  );
}

export default Header;
