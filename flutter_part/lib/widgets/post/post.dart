import 'package:flutter/material.dart';
import 'package:flutter_part/main.dart';

class PostWidget extends StatelessWidget {
  const PostWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(

          children: [
            const Padding(
              padding: EdgeInsets.all(8.0),
              child: SizedBox(
              width: 450,
              child: TextField(
              maxLines: 15,
              style: TextStyle(
                fontSize: 20
              ),
              decoration: InputDecoration(
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Row(
                children: [
              const Spacer(),
              SizedBox(
                width: 150,
                height: 50,
                child: ElevatedButton(onPressed: (){
                  Navigator.pushNamed(context, '/succes');
                }, 
                              style: ElevatedButton.styleFrom(
                                backgroundColor: Colors.black,
                                foregroundColor: Colors.white,
                                elevation: 5
                              ), 
                              child: Text("Post", style: button_text_style,)),
              ),
              const Spacer(),
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
                              child: Text("Back", style: button_text_style,)),
              ),
              const Spacer()
                ],
              ),
            )
          ],
        ),
      )
    );
  }
}
