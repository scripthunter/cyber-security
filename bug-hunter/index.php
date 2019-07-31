<?php
    if($_GET['source'] == 1)
        show_source('index.php');
        
    require_once('flag.php');
    $switch = 1;
    $user = '';
    $pass = '';
    $final_flag = '';
    
    
    if(isset($_GET['random1']) and isset($_GET['random2'])){
    
        if($_GET['random1'] !== $_GET['random2'] and md5($salt.$_GET['random1']) === md5($salt.$_GET['random2']))
        {
            $final_flag .= $flag1;
        }
    }
    
    if(!empty ($_GET['username']) and !empty ($_GET['password'])){
        $user = $_GET['username'];
        $pass = $_GET['password'];
        $concat = $user.$pass;
        
        if($concat == md5($concat))
        {
            $final_flag .= $flag2;
            $switch = 0;
        }
        
        
        $res = parse_str($_SERVER['QUERY_STRING']);
        
        if(!empty($res['username']) and !empty($res['password']) or $switch)
            $hashed = md5($user.$pass);
        
        if($hashed === 'ba6e12df1edab45f11f70b547dba9959'){
            $final_flag .= $flag3;
        }
       
    }
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!--<link rel="stylesheet" href="./css/bootstrap.min.css">
    <script !src="./js/bootstrap.min.js"></script>-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <title>HackerTwo Sign in</title>
</head>
 
<body>
 

<?php include('navbar.php'); ?>
 
<div class="container mt-5">
    <h3 class="text-center font-weight-light" style="font-size: 24px;">Sign in to HackerTwo</h3><br><br>
    <div class="card p-2 m-auto" style="width: 40rem;">
        <div class="card-body">
            <?php if($final_flag != ''){ ?>
            <div class="alert alert-success"><?php echo $final_flag; ?> </div>
            <?php } elseif(!empty($_GET['username'])) { ?>
            <div class="alert alert-warning">You'r still not a l33t</div>
            <?php } ?>
            <form>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" name="username">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" name="password">
                </div>
                <div class="form-group">
                    <input type="hidden" class="form-control" name="random1" value="<?php echo md5(rand()); ?>">
                </div>
                <div class="form-group">
                    <input type="hidden" class="form-control" name="random2" value="<?php echo md5(rand()); ?>">
                </div>
                <button type="submit" class="btn btn-primary btn-block p-2"
                       style="background-color: #ec0f76; font-weight: 550">Sign in
                </button>
            </form>
        </div>
    </div>
</div>
 
</body>
</html>