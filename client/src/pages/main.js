import { useState } from 'react';
import {
  Listdiv,
  Maindiv,
  BoardtitleBox,
  BoardContentBox,
  BoardTitle,
  ListBox,
  Listtitle,
  CreatedDate
} from '../pages/main.style';
import { initialState } from '../static/dummyData';
import { useHistory } from 'react-router-dom';
import PostList from './postList';

const Main = () => {
  const history = useHistory();
  const [posts, setPosts] = useState(initialState.posts);
  const [categories, setCategories] = useState(initialState.categories);

  return (
    <Maindiv>
      {categories.map((category) => (
        <Listdiv>
          <BoardtitleBox>
            <BoardTitle
              onClick={(e) => {
                // 서버쪽으로 categoryId를보내주고,
                // 서버에서는 받은 categoryId에 연관된 post를 가져온다?
                history.push(`/postList/?c=${category.id}`);
              }}
            >
              {category.content}
            </BoardTitle>
          </BoardtitleBox>

          <BoardContentBox>
            {posts
              .filter((el) => el.categoryId === category.id)
              .slice(-10)
              .reverse() //여행인 게시물 10개씩 최신순
              .map((el) => (
                <ListBox>
                  <Listtitle>{el.title}</Listtitle>
                  <CreatedDate>
                    {new Date(el.createdAt).toLocaleDateString('ko-kr')}
                  </CreatedDate>
                </ListBox>
              ))}
          </BoardContentBox>
        </Listdiv>
      ))}
    </Maindiv>
  );
};

export default Main;

// 초기에 보이는 페이지로 한다. //
// componants 를 띄우는 용도로 한다.

// MainList.js를 나오게 박아버린다. //

// map으로 나눈다!
