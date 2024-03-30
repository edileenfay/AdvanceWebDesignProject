

// sign up 
    
        document.addEventListener('DOMContentLoaded', () => {
            const signUpForm = document.getElementById('signInForm');

            signUpForm.addEventListener('submit', (event) => {
                event.preventDefault(); 

                const email = document.getElementById('signupEmail').value;
                const ign = document.getElementById('ign').value;

               
                if (!validateEmail(email)) {
                    alert('Please enter a valid email address.');
                    return;
                }

            
                localStorage.setItem('loggedInIGN', ign);

                 
                 const playerID = generatePlayerID();

                 showNotification('Thank you for registering! Your Player ID is: ' + playerID);
 
              
                 setTimeout(() => {
                     window.location.href = 'login.html';
                 }, 2000); 
             });

        });

        function showNotification(message) {
            const notification = document.getElementById('notification');
            notification.innerText = message;
            notification.style.display = 'block';
        }

        function validateEmail(email) {
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return regex.test(String(email).toLowerCase());
        }
        
        function generatePlayerID() {
            let playerID = '';
            for (let i = 0; i < 4; i++) {
                playerID += Math.floor(1000 + Math.random() * 9000) + ' ';
            }
            return playerID.trim();
        }

    //--sign up--

    document.addEventListener('DOMContentLoaded', () => {
        const loggedInIGN = localStorage.getItem('loggedInIGN');

        const welcomeMessage = document.getElementById('welcomeMessage');
        welcomeMessage.innerText = `  ${loggedInIGN}`;
    });
