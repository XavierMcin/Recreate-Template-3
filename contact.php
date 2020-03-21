<!doctype html>
<html lang="en">
<?php include "includes/pageHead.php"; ?>
<body>

<!--[if lt IE 8]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->

    <!-- ###### -->
    <!-- HEADER -->
    <!-- ###### -->





    <?php include "includes/header.php"; ?>

    <?php include "includes/navigation.php"; ?>

    <main class="contact-page">
    
        <section id="contact-form">
            <div class="form-container">
            
                <div>
                
                    <div class="form-message">
                    
                        <h2>Contact</h2>
                        <h3>Everything Starts With A Hello!</h3>
                        <p>We’re here to answer any questions you may have and create an effective solution for your instructional needs.</p>
                    
                    </div>

                    <div class="user-form">

                        <form action="#" method="post">

                            <input type="text" name="name" placeholder="Full name" required>

                            <input type="email" name="email" placeholder="Your email" required>

                            <input type="text" name="subject" placeholder="Subject" required>

                            <input type="number" name="phoneNumber" placeholder="Phone number" required>

                            <textarea name="message" id="form-message" cols="30" rows="10" placeholder="Type your message here" required></textarea>

                            <input type="checkbox">

                            <input type="submit" value="Send Message">

                        </form>

                    </div>
                
                </div>
            
            </div>
        </section>
    
    </main>


    <!-- ###### -->
    <!-- FOOTER -->
    <!-- ###### -->
    <?php include "includes/footer.php"; ?>


    <!-- SCRIPTS -->
    <?php include "includes/scripts.php"; ?>
    
</body>
</html>