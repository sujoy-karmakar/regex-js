function getDeliveryTime(packageType){
    let estimatedTime;
    
    switch (packageType) {
        case 'standerd':
        estimatedTime= '3-5days'
            
            break;
            case 'express':
                estimatedTime= '1-2 days'
                break;
                case 'overnight':
                    estimatedTime = 'Next Day'
                    break;
        default:
            estimatedTime= "Invalid package"
           
    }
    return estimatedTime;
    
    }
    
    console.log(getDeliveryTime ('standerd'));
    console.log(getDeliveryTime ('express'));
    console.log(getDeliveryTime ('overnight'));
    