
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_part/main.dart';

TextStyle style = TextStyle(fontSize: 24, fontWeight: FontWeight.bold);

class SuccesWidget extends StatelessWidget {
  const SuccesWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: 
      Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text("Success", style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold),),
          SizedBox(height: 30,),
          Text("Your message link:", style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),),
          SizedBox(height: 15,),
          Generate_Link(),
          SizedBox(height: 25,),
          Buttons_Row()
        ],
      ),
      
    );
  }
}

class Generate_Link extends StatelessWidget {
  const Generate_Link({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return const Text("fsdfsdjhsdfgsjhgrqgjhqgjfd", style: TextStyle(fontSize: 30));
  }
}

class Buttons_Row extends StatelessWidget {
  const Buttons_Row({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Spacer(),
          SizedBox(
          width: 150,
          height: 50,
          child: ElevatedButton(onPressed: (){
            Navigator.pushNamed(context, '/');
          }, 
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.black,
                          foregroundColor: Colors.white,
                          elevation: 5
                        ), 
                        child: Text("Home", style: button_text_style,)),
        ),
        Spacer(),
        SizedBox(
          width: 150,
          height: 50,
          child: ElevatedButton(onPressed: (){
            GestureDetector(
              onTap: () {
                Clipboard.setData(ClipboardData(text: "25"));
              },
    
              );
          }, 
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.black,
                          foregroundColor: Colors.white,
                          elevation: 5
                        ), 
                        child: Text("Copy", style: button_text_style,)),
        ),
        Spacer(),
      ],
    );
  }
}