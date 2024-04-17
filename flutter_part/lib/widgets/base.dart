import 'package:flutter/material.dart';
import 'package:flutter_part/main.dart';


class BasePlate extends StatelessWidget {
  const BasePlate({super.key});
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Spacer(),
            const Text("Post and Link", style: TextStyle(fontSize: 35, fontWeight: FontWeight.bold),),
            const Spacer(),
            SizedBox(
              width: 250,
              height: 50,
              child: ElevatedButton(onPressed: () {
                Navigator.pushNamed(context, '/post');
              }, 
                              style: ElevatedButton.styleFrom(
                              backgroundColor: Colors.black,
                              foregroundColor: Colors.white,
                              elevation: 5
                            ), 
                            child: Text("Post", style: button_text_style),),
            ),
            const SizedBox(height: 15,),
            SizedBox(
              width: 250,
              height: 50,
              child: ElevatedButton(onPressed: (){
                Navigator.pushNamed(context, '/link');
              }, 
                            style: ElevatedButton.styleFrom(
                              backgroundColor: Colors.white,
                              foregroundColor: Colors.black,
                              elevation: 5
                            ), 
                            child: Text("Link", style: button_text_style,)),
            ),
            const Spacer(),
          ],
        ),
      )
    );
  }
}
