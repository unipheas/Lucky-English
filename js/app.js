
$(document).ready(function(){

  function shortVowel(picture, word1, word2, word3, audio, wa1, wa2, wa3){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/shortVowels/'+picture
    }));
    $('.content p#sword1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'sword1',
      text: word1
    }));
    $('#sword1').on('click', function(){
      new Audio("http://polyphasicdevs.com/luckyenglish/audio/short_vowels/mp3/"+wa1).play();
    });
    $('.content p#sword2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'sword2',
      text: word2
    }));
    $('#sword2').on('click', function(){
      new Audio("http://polyphasicdevs.com/luckyenglish/audio/short_vowels/mp3/"+wa2).play();
    });
    $('.content p#sword3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'sword3',
      text: word3
    }));
    $('#sword3').on('click', function(){
      new Audio("http://polyphasicdevs.com/luckyenglish/audio/short_vowels/mp3/"+wa3).play();
    });
    new Audio("http://polyphasicdevs.com/luckyenglish/audio/short_vowels/mp3/"+audio).play();
  }

  function longVowel(pic, word1, word2, word3, audio, tag, wa1, wa2, wa3){
    $('.content img').replaceWith($('<img></img>',{
      src: 'img/longVowels/'+pic
    }));
    $('.content p#word1').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word1',
      text: word1
    }));
    $('#word1').on('click', function(){
      new Audio("http://polyphasicdevs.com/luckyenglish/audio/long_vowels/mp3/"+wa1).play();
    });
    $('.content p#word2').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word2',
      text: word2
    }));
    $('#word2').on('click', function(){
      new Audio("http://polyphasicdevs.com/luckyenglish/audio/long_vowels/mp3/"+wa2).play();
    });
    $('.content p#word3').replaceWith($('<p></p>',{
      class: 'vowelWord',
      id: 'word3',
      text: word3
    }));
    $('#word3').on('click', function(){
      new Audio("http://polyphasicdevs.com/luckyenglish/audio/long_vowels/mp3/"+wa3).play();
    });
    new Audio("http://polyphasicdevs.com/luckyenglish/audio/long_vowels/mp3/"+audio).play();
    $(tag).removeClass('buttonLight')
          .addClass('buttonDark')
          .siblings(this)
          .removeClass('buttonDark')
          .addClass('buttonLight');
  }

  function consonants(pic, word, audio){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/consonants/'+pic
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: word
    }));
    new Audio("http://polyphasicdevs.com/luckyenglish/audio/consonants/mp3/"+audio).play();
  }

  function blends(pic, word, audio){
    $('#overlay').show();
    $('.ovContent img').replaceWith($('<img></img>',{
      src: 'img/blends/'+pic
    }));
    $('.ovContent p#word1').replaceWith($('<p></p>',{
      id: 'word1',
      text: word
    }));
    new Audio("http://polyphasicdevs.com/luckyenglish/audio/blends/mp3/"+audio).play();
  }

  // Change all clicked elements to dark and light shading.
  $('ul').on('click', 'li',function(){ // When selector 'li' is clicked do the function
    $('li').removeClass('buttonDark').addClass('buttonLight'); // remove dark and add light from all li
     $(this).removeClass('buttonLight') // selected li gets light
            .addClass('buttonDark'); // selected li removes dark
  });
          // This is for the SHORT VOWELS
  $('#sword1').on('click', function(){
    new Audio("http://polyphasicdevs.com/luckyenglish/audio/short_vowels/mp3/apple.mp3").play();
  });
  $('#sword2').on('click', function(){
    new Audio("http://polyphasicdevs.com/luckyenglish/audio/short_vowels/mp3/ant.mp3").play();
  });
  $('#sword3').on('click', function(){
    new Audio("http://polyphasicdevs.com/luckyenglish/audio/short_vowels/mp3/arrow.mp3").play();
  });
  $('#shortA').on('click',function(){
    shortVowel('apple.png','Apple 苹果','Ant 蚂蚁','Arrow 箭','a.mp3','apple.mp3','ant.mp3','arrow.mp3');
  });
  $('#shortE').on('click',function(){
    shortVowel('egg.png','Egg 鸡蛋','End 结束','Engine 引擎','e.mp3','egg.mp3','end.mp3','engine.mp3');
  });
  $('#shortI').on('click',function(){
    shortVowel('insect.png', 'Insect 昆虫', 'In 在...里面', 'Internet 因特网', 'i.mp3','insect.mp3','in.mp3','internet.mp3');
  });
  $('#shortO').on('click',function(){
    shortVowel('orange.png','Orange 橙子','Object 物体','Odd 古怪的','o.mp3','orange.mp3','object.mp3','odd.mp3');
  });
  $('#shortU').on('click',function(){
    shortVowel('umbrella.png','Umbrella 雨伞','Under 在...下面','Ugly 丑','u.mp3','umbrella.mp3','under.mp3','ugly.mp3');
  });

        // This is for the LONG VOWELS
  function fadeButton(target){
    $('.subVmenu').hide();
    $(target).show();
  }
  fadeButton('.subA');

          // To show content in LONG VOWELS
                //Long Vowel A
  $('#word1').on('click', function(){
    new Audio("http://polyphasicdevs.com/luckyenglish/audio/long_vowels/mp3/day.mp3").play();
  });
  $('#word2').on('click', function(){
    new Audio("http://polyphasicdevs.com/luckyenglish/audio/long_vowels/mp3/pay.mp3").play();
  });
  $('#word3').on('click', function(){
    new Audio("http://polyphasicdevs.com/luckyenglish/audio/long_vowels/mp3/play.mp3").play();
  });
  $('#longA').on('click',function(){
    fadeButton('.subA');
    longVowel('day.png','Day 白天','Pay 付钱','Play 玩耍','a.mp3', 'span#ay', 'day.mp3', 'pay.mp3', 'play.mp3');
  });
  $('#ay').on('click',function(){
    longVowel('day.png','Day 白天','Pay 付钱','Play 玩耍','a.mp3','#ay', 'day.mp3', 'pay.mp3', 'play.mp3');
  });
  $('#ai').on('click',function(){
    longVowel('rain.png','Rain 下雨','Laid 下蛋','Paid 付钱','a.mp3','#ai','rain.mp3','laid.mp3','paid.mp3');
  });
  $('#a_e').on('click',function(){
    longVowel('plane.png','Plane 飞机','Game 游戏','Paper 纸','a.mp3','#a_e','plane.mp3','game.mp3','paper.mp3');
  });
              //Long Vowel E
  $('#longE').on('click',function(){
    fadeButton('.subE');
    longVowel('bee.png','Bee 蜜蜂','Free 免费','Tree 树','e.mp3','span#ee','bee.mp3','free.mp3','tree.mp3');
  });
  $('#ee').on('click',function(){
    longVowel('bee.png','Bee 蜜蜂','Free 免费','Tree 树','e.mp3','#ee','bee.mp3','free.mp3','tree.mp3');
  });
  $('#ea').on('click',function(){
    longVowel('eat.png','Eat 吃','Clean 干净','Flea 跳蚤','e.mp3','#ea','eat.mp3','clean.mp3','flea.mp3');
  });
  $('#e_e').on('click',function(){
    longVowel('chinese.png','Chinese 中国人','Athlete 运动员','Theme 主题','e.mp3','#e_e','chinese.mp3','athlete.mp3','theme.mp3');
  });
  $('#eay').on('click',function(){
    longVowel('angry.png','Angry 生气','Happy 高兴','Lady 女士','e.mp3','#eay','angry.mp3','happy.mp3','lady.mp3');
  });
            //Long Vowel I
  $('#longI').on('click',function(){
    fadeButton('.subI');
    longVowel('pie.png','Pie 派','Lie 撒谎','Tie 领带','i.mp3','span#ie','pie.mp3','lie.mp3','tie.mp3');
  });
  $('#ie').on('click',function(){
    longVowel('pie.png','Pie 派','Lie 撒谎','Tie 领带','i.mp3','span#ie','pie.mp3','lie.mp3','tie.mp3');
  });
  $('#igh').on('click',function(){
    longVowel('light.png','Light 轻','High 高','Sigh 叹气','i.mp3','#igh','light.mp3','high.mp3','sigh.mp3');
  });
  $('#y').on('click',function(){
    longVowel('fly.png','Fly 苍蝇','Fry 炸','Cry 哭','i.mp3','#y','fly.mp3','fry.mp3','cry.mp3');
  });
  $('#i_e').on('click',function(){
    longVowel('bike.png','Bike 自行车','Time 时间','Wine 红酒','i.mp3','#i_e','bike.mp3','time.mp3','wine.mp3');
  });
          //Long Vowel O
  $('#longO').on('click',function(){
    fadeButton('.subO');
    longVowel('boat.jpg','Boat 船','Road 道路','Coat 外套','o.mp3','span#oa','boat.mp3','road.mp3','coat.mp3');
  });
  $('#oa').on('click',function(){
    longVowel('boat.jpg','Boat 船','Road 道路','Coat 外套','o.mp3','span#oa','boat.mp3','road.mp3','coat.mp3');
  });
  $('#ow').on('click',function(){
    longVowel('window.png','Window 窗户','Blow 吹','Row 划船','o.mp3','#ow','window.mp3','blow.mp3','row.mp3');
  });
  $('#o_e').on('click',function(){
    longVowel('phone.png','Phone 手机','Bone 骨头','Tone 声调','o.mp3','#o_e','phone.mp3','bone.mp3','tone.mp3');
  });
          //Long Vowel U
  $('#longU').on('click',function(){
    fadeButton('.subU');
    longVowel('blue.png','Blue 蓝色','Argue 争吵','True 真实','u.mp3','span#ue','blue.mp3','argue.mp3','true.mp3');
  });
  $('#ue').on('click',function(){
    longVowel('blue.png','Blue 蓝色','Argue 争吵','True 真实','u.mp3','span#ue','blue.mp3','argue.mp3','true.mp3');
  });
  $('#ew').on('click',function(){
    longVowel('mew.png','Mew 喵喵叫','Blew 吹','Shrew 鼩鼱','u.mp3','#ew','mew.mp3','blew.mp3','shrew.mp3');
  });
  $('#u_e').on('click',function(){
    longVowel('cube.png','Cube 方块','Refuse 拒绝','Tube 管道','u.mp3','#u_e','cube.mp3','refuse.mp3','tube.mp3');
  });

            // DIALOG BOX FOR CONTENT
  $('#close').on('click',function(){
    $('#overlay').hide();
  });

  $('#overlay').hide();

              // CONSONANTS
  $('#b').on('click',function(){
    consonants('ball.png','Ball 球','ball.mp3');
  });
  $('#c').on('click',function(){
    consonants('cat.png','Cat 猫','cat.mp3');
  });
  $('#d').on('click',function(){
    consonants('dog.png','Dog 狗','dog.mp3');
  });
  $('#f').on('click',function(){
    consonants('fish.png','Fish 鱼','fish.mp3');
  });
  $('#g').on('click',function(){
    consonants('goat.png','Goat 山羊','goat.mp3');
  });
  $('#h').on('click',function(){
    consonants('hat.png','Hat 帽子','hat.mp3');
  });
  $('#j').on('click',function(){
    consonants('jam.png','Jam 果酱','jam.mp3');
  });
  $('#k').on('click',function(){
    consonants('king.png','King 国王','king.mp3');
  });
  $('#l').on('click',function(){
    consonants('lady.png','Lady 女士','lady.mp3');
  });
  $('#m').on('click',function(){
    consonants('mouse.png','Mouse 老鼠','mouse.mp3');
  });
  $('#n').on('click',function(){
    consonants('nose.png','Nose 鼻子','nose.mp3');
  });
  $('#p').on('click',function(){
    consonants('pen.png','Pen 笔','pen.mp3');
  });
  $('#q').on('click',function(){
    consonants('queen.png','Queen 女王','queen.mp3');
  });
  $('#r').on('click',function(){
    consonants('robot.png','Robot 机器人','robot.mp3');
  });
  $('#s').on('click',function(){
    consonants('snake.png','Snake 蛇','snake.mp3');
  });
  $('#t').on('click',function(){
    consonants('tshirt.png','Tshirt T恤','tshirt.mp3');
  });
  $('#v').on('click',function(){
    consonants('violet.png','Violet 紫罗兰','violet.mp3');
  });
  $('#w').on('click',function(){
    consonants('whale.png','Whale 鲸鱼','whale.mp3');
  });
  $('#x').on('click',function(){
    consonants('box.png','Box 箱','box.mp3');
  });
  $('#cony').on('click',function(){
    consonants('yellow.png','Yellow 黄色','yellow.mp3');
  });
  $('#z').on('click',function(){
    consonants('zebra.png','Zebra 斑马','zebra.mp3');
  });

            // `BLENDS`
  $('#ch').on('click',function(){
    blends('cheese.png','Cheese 芝士','ch.mp3');
  });
  $('#sh').on('click',function(){
    blends('sh.png','Sh! 嘘！','sh.mp3');
  });
  $('#th').on('click',function(){
    blends('there.png','There 那里','th.mp3');
  });
  $('#thU').on('click',function(){
    blends('three.png','Three 三','th_.mp3');
  });
  $('#oo').on('click',function(){
    blends('tools.png','Tools 工具','oo.mp3');
  });
  $('#ooU').on('click',function(){
    blends('good.png','Good 好','oo_.mp3');
  });
  $('#oi').on('click',function(){
    blends('boil.png','Boil 煮沸','oi.mp3');
  });
  $('#oy').on('click',function(){
    blends('toys.png','Toys 玩具','oy.mp3');
  });
  $('#ou').on('click',function(){
    blends('out.png','Out 外面','ou.mp3');
  });
  $('#blOw').on('click',function(){
    blends('owl.png','Owl 猫头鹰','ow.mp3');
  });
  $('#er').on('click',function(){
    blends('germ.png','Germ 病菌','er.mp3');
  });
  $('#ur').on('click',function(){
    blends('nurse.png','Nurse 护士','ur.mpe');
  });
  $('#ir').on('click',function(){
    blends('shirt.png','Shirt 衬衫','ir.mp3');
  });
  $('#or').on('click',function(){
    blends('horn.png','Horn 角','or.mp3');
  });
  $('#ar').on('click',function(){
    blends('car.png','Car 车','ar.mp3');
  });
  $('#aw').on('click',function(){
    blends('paw.png','Paw 爪','aw.mp3');
  });
  $('#ing').on('click',function(){
    blends('sing.png','Sing 唱歌','ing.mp3');
  });
  $('#ph').on('click',function(){
    blends('phone.png','Phone 电话','ph.mp3');
  });
  $('#tion').on('click',function(){
    blends('caution.png','Caution 谨慎','tion.mp3');
  });
 });
