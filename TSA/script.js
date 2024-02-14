function animateDay(day) {
    const animatedBox = document.getElementById('animatedBox');
    const dayButton = document.getElementById(day);
  
    // Set the border color and background color based on the day
    const borderColor = getBorderColor(day);
    const boxColor = getBoxColor(day);
    const buttonColor = getButtonColor(day);
  
    animatedBox.style.borderColor = borderColor;
    animatedBox.style.backgroundColor = boxColor;
  
    // Set the button background color
    dayButton.style.backgroundColor = buttonColor;
  
    animatedBox.style.transform = 'translateY(100px)';
    animatedBox.style.opacity = 1;
  
    setTimeout(() => {
      animatedBox.style.transform = 'translateY(0)';
      animatedBox.style.opacity = 0;
    }, 1000);
  }
  
  function getBorderColor(day) {
    // Function to return the appropriate border color based on the day
    switch (day) {
      case 'monday':
        return 'green';
      case 'tuesday':
        return 'blue';
      case 'wednesday':
        return 'yellow';
      case 'thursday':
        return 'orange';
      case 'friday':
        return 'purple';
      case 'saturday':
        return 'red';
      case 'sunday':
        return 'cyan';
      default:
        return 'black'; // Default color if the day is not recognized
    }
  }
  
  function getBoxColor(day) {
    // Function to return the appropriate box color based on the day
    switch (day) {
      case 'monday':
        return 'green';
      case 'tuesday':
        return 'blue';
      case 'wednesday':
        return 'yellow';
      case 'thursday':
        return 'orange';
      case 'friday':
        return 'purple';
      case 'saturday':
        return 'red';
      case 'sunday':
        return 'cyan';
      default:
        return 'black'; // Default color if the day is not recognized
    }
  }
  
  function getButtonColor(day) {
    // Function to return the appropriate button color based on the day
    switch (day) {
      case 'monday':
        return 'green';
      case 'tuesday':
        return 'blue';
      case 'wednesday':
        return 'yellow';
      case 'thursday':
        return 'orange';
      case 'friday':
        return 'purple';
      case 'saturday':
        return 'red';
      case 'sunday':
        return 'cyan';
      default:
        return 'transparent'; // Default color for other days
    }
  }
  