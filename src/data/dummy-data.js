import {Video} from '../models/Video';
import {Comment} from '../models/Comment';
import {Product} from '../models/Product';

export const VIDEOS = [
  new Video(
    1,
    'cutedog',
    'https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4',
    'Cute dog shaking hands #cute #puppy',
    'Song #1',
    4321,
    2841,
    'https://wallpaperaccess.com/full/1669289.jpg',
  ),
  new Video(
    2,
    'meow',
    'https://v.pinimg.com/videos/mc/720p/11/05/2c/11052c35282355459147eabe31cf3c75.mp4',
    'Doggies eating candy #cute #puppy',
    'Song #2',
    2411,
    1222,
    'https://wallpaperaccess.com/thumb/266770.jpg',
  ),
  new Video(
    3,
    'yummy',
    'https://v.pinimg.com/videos/mc/720p/c9/22/d8/c922d8391146cc2fdbeb367e8da0d61f.mp4',
    'Brown little puppy #cute #puppy',
    'Song #3',
    3100,
    801,
    'https://wallpaperaccess.com/thumb/384178.jpg',
  ),
];

export const USERS = [
  {
    id: 1,
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'John Doe',
    chat: 'Hey, how are you doing today?',
  },
  {
    id: 2,
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Jane Smith',
    chat: 'I just finished the report. Can you review it?',
  },
  {
    id: 3,
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    name: 'Mike Johnson',
    chat: 'Do you have any updates on the project?',
  },
  {
    id: 4,
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    name: 'Alice Brown',
    chat: "Let's schedule a meeting for tomorrow.",
  },
  {
    id: 5,
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    name: 'David Wilson',
    chat: 'Can we discuss the new design ideas?',
  },
];

export const USERSSUG = [
  {
    id: 1,
    avatar:
      'https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Alice Johnson',
    chat: {
      lastMessage: 'Những người bạn có thể biết',
      timestamp: '2024-09-24T10:30:00Z',
    },
  },
  {
    id: 2,
    avatar:
      'https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Bob Smith',
    chat: {
      lastMessage: 'Những người bạn có thể biết',
      timestamp: '2024-09-24T09:45:00Z',
    },
  },
  {
    id: 3,
    avatar:
      'https://images.unsplash.com/photo-1702482527875-e16d07f0d91b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Charlie Brown',
    chat: {
      lastMessage: 'Những người bạn có thể biết',
      timestamp: '2024-09-23T18:20:00Z',
    },
  },
  {
    id: 4,
    avatar:
      'https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Diana Ross',
    chat: {
      lastMessage: 'Những người bạn có thể biết',
      timestamp: '2024-09-23T14:10:00Z',
    },
  },
  {
    id: 5,
    avatar:
      'https://images.unsplash.com/photo-1632324343640-86af9827dbeb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Ethan Hunt',
    chat: {
      lastMessage: 'Những người bạn có thể biết',
      timestamp: '2024-09-22T20:05:00Z',
    },
  },
  {
    id: 6,
    avatar:
      'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Fiona Gallagher',
    chat: {
      lastMessage: 'Những người bạn có thể biết',
      timestamp: '2024-09-24T11:15:00Z',
    },
  },
  {
    id: 7,
    avatar:
      'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=2417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'George Washington',
    chat: {
      lastMessage: 'Những người bạn có thể biết',
      timestamp: '2024-09-24T08:30:00Z',
    },
  },
];

export const COMMENTS = [
  new Comment(
    1,
    'https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'JohnDoe',
    'Great article! Really enjoyed reading it.',
  ),
  new Comment(
    2,
    'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'TechEnthusiast',
    'Could you provide more details on the technical aspects?',
  ),
  new Comment(
    3,
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'CuriousReader',
    'This reminds me of a similar concept I read about last week.',
  ),
  new Comment(
    4,
    'https://images.unsplash.com/photo-1636041282783-e218bb0a217b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D',
    'Rhder',
    'I feel happy when I see this video',
  ),
  new Comment(
    5,
    'https://images.unsplash.com/photo-1706885093487-7eda37b48a60?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D',
    'Marry',
    'I very like this short video',
  ),
];

export const CONVERSITIONS = [
  {
    author: 'bot',
    message: "Hey, how's it going?",
  },
  {
    author: 'user',
    message: "I'm doing well, thanks! How about you?",
  },
  {
    author: 'bot',
    message: 'Not bad, just working on that project I mentioned.',
  },
  {
    author: 'user',
    message: "Oh nice! How's that going?",
  },
  {
    author: 'bot',
    message: "It's coming along, still a lot to do though.",
  },
  {
    author: 'user',
    message: 'Hey guys, what are you talking about?',
  },
  {
    author: 'bot',
    message: "Just discussing John's project. How about you, Mark?",
  },
  {
    author: 'user',
    message: 'Oh cool! I’ve been busy with some coding lately.',
  },
  {
    author: 'bot',
    message: 'Nice! What are you working on?',
  },
  {
    author: 'user',
    message:
      'Building a new feature for an app, handling real-time notifications.',
  },
  {
    author: 'bot',
    message: 'That sounds challenging but fun!',
  },
  {
    author: 'user',
    message: 'Yeah, real-time stuff is always tricky.',
  },
  {
    author: 'bot',
    message: "Hey everyone, what's up?",
  },
  {
    author: 'user',
    message: "Hi Emily! We're talking about some projects we’re working on.",
  },
  {
    author: 'bot',
    message:
      'Sounds interesting! I’m working on designing a new UI for a client.',
  },
  {
    author: 'user',
    message: 'That’s awesome, Emily! UI design is fun.',
  },
  {
    author: 'bot',
    message: 'Definitely. Design can really make or break an app.',
  },
  {
    author: 'user',
    message: 'Exactly! Trying to make it both user-friendly and sleek.',
  },
  {
    author: 'bot',
    message: "I’m sure it’ll turn out great! You're amazing at that.",
  },
  {
    author: 'user',
    message: 'Thanks, Jane! Appreciate the support.',
  },
  {
    author: 'bot',
    message: 'Hi all! What’s everyone working on today?',
  },
  {
    author: 'user',
    message:
      'Hey Sarah! I’m working on my project, Mark’s doing some app feature, and Emily is on a UI design. What about you?',
  },
  {
    author: 'bot',
    message:
      'Nice! I’ve just wrapped up a report for my team, and now I’m working on analyzing some user data.',
  },
  {
    author: 'user',
    message: "That sounds super important, how's it going?",
  },
  {
    author: 'bot',
    message:
      "Pretty good, the data is showing some interesting trends. I'll have a better idea after I dig a bit more.",
  },
  {
    author: 'user',
    message:
      'User data is always fascinating. I’m working on adding personalized notifications to my app based on user activity.',
  },
  {
    author: 'bot',
    message:
      'That’s cool, Mark! That kind of personalization really improves the user experience.',
  },
  {
    author: 'user',
    message:
      'Yeah, personalization is definitely the way forward. Keeps users more engaged.',
  },
  {
    author: 'bot',
    message:
      'Exactly, I’m seeing some patterns in our data that show how much users like tailored experiences.',
  },
  {
    author: 'user',
    message:
      'User behavior is really interesting. It’s crazy how small changes can make a big impact.',
  },
  {
    author: 'bot',
    message:
      'Yeah, even changing the notification timing can affect engagement rates.',
  },
  {
    author: 'user',
    message:
      'True, small details really matter. I’m trying to focus on those for my UI design.',
  },
  {
    author: 'bot',
    message: 'Well, it sounds like we all have some exciting work ahead!',
  },
  {
    author: 'user',
    message: 'Definitely! Let’s crush it!',
  },
];

export const PRODUCTS = [
  {
    id: 1,
    title: 'Nike Air Max 97',
    description:
      'Bước vào một ngày mới với đôi giày thể thao đa năng, thiết kế mang lại sự thoải mái tuyệt đối và phong cách thời thượng. Sản phẩm được làm từ chất liệu vải thoáng khí cao cấp, giúp chân bạn luôn khô ráo và thoải mái suốt cả ngày. Đế giày được chế tác từ cao su chống trượt, đảm bảo độ bám tốt trên mọi địa hình, giúp bạn tự tin trong mỗi bước đi.',
    rating: 4.5,
    price: 299,
    thumbnail: require('../assets/images/products/Nike-Air-Max-97-Air-Force.png'),
    size: 42,
    quantity: 1,
    review: 4.5,
  },
  {
    id: 2,
    title: 'Sneakers Nike',
    description:
      'Bước vào một ngày mới với đôi giày thể thao đa năng, thiết kế mang lại sự thoải mái tuyệt đối và phong cách thời thượng. Sản phẩm được làm từ chất liệu vải thoáng khí cao cấp, giúp chân bạn luôn khô ráo và thoải mái suốt cả ngày. Đế giày được chế tác từ cao su chống trượt, đảm bảo độ bám tốt trên mọi địa hình, giúp bạn tự tin trong mỗi bước đi.',
    rating: 4.7,
    price: 399,
    thumbnail: require('../assets/images/products/Nike-Air-Max-Sneakers-red-white.png'),
    size: 40,
    quantity: 1,
    review: 4.2,
  },
  {
    id: 3,
    title: 'Nike Shoe',
    description:
      'Bước vào một ngày mới với đôi giày thể thao đa năng, thiết kế mang lại sự thoải mái tuyệt đối và phong cách thời thượng. Sản phẩm được làm từ chất liệu vải thoáng khí cao cấp, giúp chân bạn luôn khô ráo và thoải mái suốt cả ngày. Đế giày được chế tác từ cao su chống trượt, đảm bảo độ bám tốt trên mọi địa hình, giúp bạn tự tin trong mỗi bước đi.',
    rating: 4.2,
    price: 469,
    thumbnail: require('../assets/images/products/Nike-Shoe-Running.png'),
    size: 41,
    quantity: 1,
    review: 4.3,
  },
  {
    id: 4,
    title: 'Sneakers Nike',
    description:
      'Bước vào một ngày mới với đôi giày thể thao đa năng, thiết kế mang lại sự thoải mái tuyệt đối và phong cách thời thượng. Sản phẩm được làm từ chất liệu vải thoáng khí cao cấp, giúp chân bạn luôn khô ráo và thoải mái suốt cả ngày. Đế giày được chế tác từ cao su chống trượt, đảm bảo độ bám tốt trên mọi địa hình, giúp bạn tự tin trong mỗi bước đi.',
    rating: 4.0,
    price: 189,
    thumbnail: require('../assets/images/products/Sneakers-Nike-Basketball.png'),
    size: 39,
    quantity: 1,
    review: 4.1,
  },
  {
    id: 5,
    title: 'Flywire Sneakers',
    description:
      'Bước vào một ngày mới với đôi giày thể thao đa năng, thiết kế mang lại sự thoải mái tuyệt đối và phong cách thời thượng. Sản phẩm được làm từ chất liệu vải thoáng khí cao cấp, giúp chân bạn luôn khô ráo và thoải mái suốt cả ngày. Đế giày được chế tác từ cao su chống trượt, đảm bảo độ bám tốt trên mọi địa hình, giúp bạn tự tin trong mỗi bước đi.',
    rating: 4.8,
    price: 269,
    thumbnail: require('../assets/images/products/Sneakers-Nike-Flywire.png'),
    size: 44,
    quantity: 1,
    review: 4.6,
  },
  {
    id: 6,
    title: 'Sneakers Yellow',
    description:
      'Bước vào một ngày mới với đôi giày thể thao đa năng, thiết kế mang lại sự thoải mái tuyệt đối và phong cách thời thượng. Sản phẩm được làm từ chất liệu vải thoáng khí cao cấp, giúp chân bạn luôn khô ráo và thoải mái suốt cả ngày. Đế giày được chế tác từ cao su chống trượt, đảm bảo độ bám tốt trên mọi địa hình, giúp bạn tự tin trong mỗi bước đi.',
    rating: 4.8,
    price: 429,
    thumbnail: require('../assets/images/products/Sneakers-Yellow-Shoe.png'),
    size: 45,
    quantity: 1,
    review: 4.8,
  },
  {
    id: 7,
    title: 'Nike Air Max',
    description:
      'Bước vào một ngày mới với đôi giày thể thao đa năng, thiết kế mang lại sự thoải mái tuyệt đối và phong cách thời thượng. Sản phẩm được làm từ chất liệu vải thoáng khí cao cấp, giúp chân bạn luôn khô ráo và thoải mái suốt cả ngày. Đế giày được chế tác từ cao su chống trượt, đảm bảo độ bám tốt trên mọi địa hình, giúp bạn tự tin trong mỗi bước đi.',
    rating: 4.8,
    price: 439,
    thumbnail: require('../assets/images/products/Nike-Air-Max-Sneakers-Red.png'),
    size: 40,
    quantity: 1,
    review: 4.7,
  },
  {
    id: 8,
    title: 'Nike Air Max',
    description:
      'Bước vào một ngày mới với đôi giày thể thao đa năng, thiết kế mang lại sự thoải mái tuyệt đối và phong cách thời thượng. Sản phẩm được làm từ chất liệu vải thoáng khí cao cấp, giúp chân bạn luôn khô ráo và thoải mái suốt cả ngày. Đế giày được chế tác từ cao su chống trượt, đảm bảo độ bám tốt trên mọi địa hình, giúp bạn tự tin trong mỗi bước đi.',
    rating: 4.8,
    price: 119,
    thumbnail: require('../assets/images/products/Nike-Air-Max-Blue.png'),
    size: 43,
    quantity: 1,
    review: 4.4,
  },
];

export const SALES = [
  {
    id: 1,
    title: 'Nike Air Max 97',
    description:
      'Bước vào một ngày mới với đôi giày thể thao đa năng, thiết kế mang lại sự thoải mái tuyệt đối và phong cách thời thượng. Sản phẩm được làm từ chất liệu vải thoáng khí cao cấp, giúp chân bạn luôn khô ráo và thoải mái suốt cả ngày. Đế giày được chế tác từ cao su chống trượt, đảm bảo độ bám tốt trên mọi địa hình, giúp bạn tự tin trong mỗi bước đi.',
    rating: 4.5,
    price: 299,
    thumbnail: require('../assets/images/products/Nike-Air-Max-97-Air-Force.png'),
    size: 42,
    quantity: 1,
  },
  {
    id: 2,
    title: 'Sneakers Red White',
    description:
      'Bước vào một ngày mới với đôi giày thể thao đa năng, thiết kế mang lại sự thoải mái tuyệt đối và phong cách thời thượng. Sản phẩm được làm từ chất liệu vải thoáng khí cao cấp, giúp chân bạn luôn khô ráo và thoải mái suốt cả ngày. Đế giày được chế tác từ cao su chống trượt, đảm bảo độ bám tốt trên mọi địa hình, giúp bạn tự tin trong mỗi bước đi.',
    rating: 4.7,
    price: 399,
    thumbnail: require('../assets/images/products/Nike-Air-Max-Sneakers-red-white.png'),
    size: 40,
    quantity: 1,
  },
  {
    id: 3,
    title: 'Nike Shoe',
    description:
      'Bước vào một ngày mới với đôi giày thể thao đa năng, thiết kế mang lại sự thoải mái tuyệt đối và phong cách thời thượng. Sản phẩm được làm từ chất liệu vải thoáng khí cao cấp, giúp chân bạn luôn khô ráo và thoải mái suốt cả ngày. Đế giày được chế tác từ cao su chống trượt, đảm bảo độ bám tốt trên mọi địa hình, giúp bạn tự tin trong mỗi bước đi.',
    rating: 4.2,
    price: 469,
    thumbnail: require('../assets/images/products/Nike-Shoe-Running.png'),
    size: 41,
    quantity: 1,
  },
  {
    id: 4,
    title: 'Sneakers Nike',
    description:
      'Bước vào một ngày mới với đôi giày thể thao đa năng, thiết kế mang lại sự thoải mái tuyệt đối và phong cách thời thượng. Sản phẩm được làm từ chất liệu vải thoáng khí cao cấp, giúp chân bạn luôn khô ráo và thoải mái suốt cả ngày. Đế giày được chế tác từ cao su chống trượt, đảm bảo độ bám tốt trên mọi địa hình, giúp bạn tự tin trong mỗi bước đi.',
    rating: 4.0,
    price: 189,
    thumbnail: require('../assets/images/products/Sneakers-Nike-Basketball.png'),
    size: 39,
    quantity: 1,
  },
];

export const VOUCHERS = [
  {
    id: 1,
    voucher: 'Giảm 25% lúc 10:00',
  },
  {
    id: 2,
    voucher: 'NIKE GIÁ SHOCK',
  },
  {
    id: 3,
    voucher: 'Bấm Săn Deal -70%',
  },
];
