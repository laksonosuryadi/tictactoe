#Tic-Tac-Toe!
###Hacktiv8 - Phase0 - Week2 - Day5


Ini adalah Weekly Project ke 2 dari Phase0 Hacktiv8.
Saya membuat game Tic-Tac-Toe sederhana dengan menggunakan Vanilla JS untuk mengatur **game mechanics**-nya,
beserta HTML untuk **pembuatan canvas** dan CSS untuk **layouting**.
Tampilannya juga sudah dibuat responsive dengan display mobile phone.

Untuk mencoba game ini, silahkan klik [di sini](https://laksonosuryadi.github.io/tictactoe "TIC-TAC-TOE!").  
Link untuk game ini juga sudah saya sertakan di [GitHub Page](https://laksonosuryadi.github.io/) saya (klik Project-1 pada navigation bar).


#Pseudocode for Tic-Tac-Toe!

    INISIALISASI Variables yang akan digunakan
    DEKLARASI Constructor Function var Announce1,var Announce2 untuk di-instantiate pada function sayWinner()

    //G A M E   I N I T I A L I Z A T I O N

    INPUT Nama Player X
    INPUT Nama Player O
    RANDOMIZE Turn pertama dengan Object Math Math.round(Math.random() dikali 10
    IF Modulus 2 dari turn adalah 0
        TAMPILKAN [Nama Player X] is X & gets the 1st Turn!
    ELSE
        TAMPILKAN [Nama Player O] is O & gets the 1st Turn!



    //G A M E   M E C H A N I C S

    //PSEUDOCODE Function canvasClicked(canvasNumber)
    PANGGIL Function canvasClicked(canvasNumber) Jika Player mengklik salah satu Kotak (Canvas)
        IF canvas masih kosong (filled[canvasNumber] === false) DAN var q === 0
            IF Modulus 2 dari turn adalah 0
                GAMBARKAN tanda X pada canvas tersebut dengan warna Hijau
            ELSE
                GAMBARKAN tanda O pada canvas tersebut dengan warna Merah
            ENDIF

            ITERASI jumlah turn (turn++)
            UBAH value filled[canvasNumber] menjadi true
            PANGGIL Function checkForWinner(content[canvasNumber])
            ITERASI jumlah canvas yang terisi (canvasFilled++)

            IF Modulus 2 dari turn adalah 0
                TAMPILKAN Now is [Nama Player X]'s X Turn
            ELSE   
                TAMPILKAN Now is [Nama Player O]'s O Turn
            ENDIF

            IF jumlah canvas yang terisi sudah 9 DAN var q === 0
                PANGGIL Function sayDraw()
            ENDIF

            ELSE IF canvas masih kosong (filled[canvasNumber] === false) DAN var q === 1
                IF Modulus 2 dari turn adalah 0
                    ALERT THE GAME IS OVER. \n Please Click PLAY AGAIN to Restart the game.
                ELSE
                    ALERT THE GAME IS OVER. \n Please Click PLAY AGAIN to Restart the game.
                ENDIF
            END IF

            ELSE IF canvas sudah terisi (filled[canvasNumber] === true) DAN var q === 1
                IF Modulus 2 dari turn adalah 0
                    ALERT THE GAME IS OVER. \n Please Click PLAY AGAIN to Restart the game.
                ELSE
                    ALERT THE GAME IS OVER. \n Please Click PLAY AGAIN to Restart the game.
                ENDIF
            ENDIF

            ELSE IF canvas sudah terisi (filled[canvasNumber] === true) DAN jumlah canvas yang terisi sudah 9
                ALERT THE GAME IS OVER. \n Please Click PLAY AGAIN to Restart the game.
            ENDIF

        ELSE
            ALERT That box is already occupied. Please TIC another box.
        ENDIF


    //PSEUDOCODE Function checkForWinner
    //content[...] adalah posisi canvas di dalam Array content
    //symbol adalah X atau O
    IF(content[0] == symbol DAN content[1] == symbol DAN content[2] == symbol)
        PANGGIL function sayWinner(symbol)
        TAMPILKAN Button PLAY AGAIN
        UBAH value var q menjadi 1

        ELSE IF(content[3] == symbol DAN content[4] == symbol DAN content[5] == symbol)
            PANGGIL function sayWinner(symbol)
            TAMPILKAN Button PLAY AGAIN
            UBAH value var q menjadi 1

            ELSE IF(content[6] == symbol DAN content[7] == symbol DAN content[8] == symbol)
                PANGGIL function sayWinner(symbol)
                TAMPILKAN Button PLAY AGAIN
                UBAH value var q menjadi 1

                ELSE IF(content[0] == symbol DAN content[3] == symbol DAN content[6] == symbol)
                    PANGGIL function sayWinner(symbol)
                    TAMPILKAN Button PLAY AGAIN
                    UBAH value var q menjadi 1

                    ELSE IF(content[1] == symbol DAN content[4] == symbol DAN content[7] == symbol)
                        PANGGIL function sayWinner(symbol)
                        TAMPILKAN Button PLAY AGAIN
                        UBAH value var q menjadi 1

                        ELSE IF(content[2] == symbol DAN content[5] == symbol DAN content[8] == symbol)
                            PANGGIL function sayWinner(symbol)
                            TAMPILKAN Button PLAY AGAIN
                            UBAH value var q menjadi 1

                            ELSE IF(content[0] == symbol DAN content[4] == symbol DAN content[8] == symbol)
                                PANGGIL function sayWinner(symbol)
                                TAMPILKAN Button PLAY AGAIN
                                UBAH value var q menjadi 1

                                ELSE IF(content[2] == symbol DAN content[4] == symbol DAN content[6] == symbol)
                                    PANGGIL function sayWinner(symbol)
                                    TAMPILKAN Button PLAY AGAIN
                                    UBAH value var q menjadi 1

                                    ELSE
                                        RETURN true
    ENDIF


    //PSEUDOCODE Function sayWinner
    INSTANTIATE Object p1 dengan Function Constructor Announce1
    INSTANTIATE Object p2 dengan Function Constructor Announce2
    IF value dari symbol adalah X
        PANGGIL Object p1
        TAMPILKAN value dari Function isTheWinner()
        HILANGKAN tulisan Now is [Nama Player ...]'s ... Turn
    ELSE IF value dari symbol adalah O
        PANGGIL Object p2
        TAMPILKAN value dari Function isTheWinner()
        HILANGKAN tulisan Now is [Nama Player ...]'s ... Turn
    ENDIF


    //PSEUDOCODE Function sayDraw
    TAMPILKAN Button IT'S A DRAW!! PLAY AGAIN?
    HILANGKAN tulisan Now is [Nama Player ...]'s ... Turn


    //PSEUDOCODE Function reset
    TAMPILKAN pop-up window confirm untuk pertanyaan Play Again?
        IF Player memilih OK
            ALERT Now Loading...
            PANGGIL location.reload(true)
        ELSE
            ALERT Thanks for playing! See you again!
        ENDIF
