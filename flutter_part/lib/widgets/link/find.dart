
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_part/main.dart';

TextStyle style = TextStyle(fontSize: 24, fontWeight: FontWeight.bold);

class FindWidget extends StatelessWidget {
  const FindWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: 
      Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("Message", style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),),
            SizedBox(height: 15,),
            Generate_Link(),
            SizedBox(height: 25,),
            Buttons_Row()
          ],
        ),
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
    return const Padding(
      padding: EdgeInsets.all(8.0),
      child: Text("fsdfsdjhsdfgsjhgrqgfdssfdfhksjkdfjskdhfjkshdkfjfsfdsjkdfhjshkdfjhqgjfd", style: TextStyle(fontSize: 19)),
    );
  }
}

class Buttons_Row extends StatelessWidget {
  const Buttons_Row({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return
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
        );
  }
}