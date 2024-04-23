<!DOCTYPE html>
<html>
<head>
    <title>Address Form</title>
</head>
<body>
<?php
$address = $city = $state = "";
$address_err = $city_err = $state_err = "";
if($_SERVER["REQUEST_METHOD"] == "POST"){
    if(empty(trim($_POST["address"]))){
        $address_err = "Please enter your address.";
    } else{
        $address = trim($_POST["address"]);
    }
    if(empty(trim($_POST["city"]))){
        $city_err = "Please enter your city.";
    } else{
        $city = trim($_POST["city"]);
    }
    if(empty(trim($_POST["state"]))){
        $state_err = "Please enter your state.";
    } elseif(strlen(trim($_POST["state"])) != 2){
        $state_err = "State must be a valid two-letter abbreviation.";
    } else{
        $state = trim($_POST["state"]);
    }
    if(empty($address_err) && empty($city_err) && empty($state_err)){
        require_once "config.php";
        $sql = "INSERT INTO addresses (address, city, state) VALUES (?, ?, ?)";
        if($stmt = mysqli_prepare($link, $sql)){
            mysqli_stmt_bind_param($stmt, "sss", $param_address, $param_city, $param_state);
            $param_address = $address;
            $param_city = $city;
            $param_state = $state;
            if(mysqli_stmt_execute($stmt)){
                echo "Records inserted successfully.";
            } else{
                echo "Please try again later.";
            }
            mysqli_stmt_close($stmt);
        }
        mysqli_close($link);
    }   }
?>
<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
    <div>
        <label>Address</label>
        <input type="text" name="address" value="<?php echo $address; ?>">
        <span><?php echo $address_err; ?></span>
    </div>
    <div>
        <label>City</label>
        <input type="text" name="city" value="<?php echo $city; ?>">
        <span><?php echo $city_err; ?></span>
    </div>
    <div>
        <label>State</label>
        <input type="text" name="state" maxlength="2" value="<?php echo $state; ?>">
        <span><?php echo $state_err; ?></span>
    </div>
    <div> <input type="submit" value="Submit">
    </div>
</form>
</body>
</html>
