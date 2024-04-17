import 'package:flutter/material.dart';
import 'package:flutter_part/widgets/base.dart';
import 'package:flutter_part/widgets/link/find.dart';
import 'package:flutter_part/widgets/link/link.dart';
import 'package:flutter_part/widgets/post/post.dart';
import 'package:flutter_part/widgets/post/succes.dart';

TextStyle button_text_style = TextStyle(fontSize: 17, fontWeight: FontWeight.bold);

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: '/',
      routes: {
        '/': (context) => const BasePlate(),
        '/post': (context) => const PostWidget(),
        '/link': (context) => const LinkWidget(),
        '/succes': (context) => const SuccesWidget(),
        '/find': (context) => const FindWidget(),
      },
    );
  }
}
