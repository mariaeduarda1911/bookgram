import { useState } from 'react'
import {
    FiHeart,
    FiHome,
    FiPlusSquare,
    FiSearch,
    FiUser
} from 'react-icons/fi'

import Header from './components/Header'
import Reviews from './components/Reviews'
import Post from './components/Post'
import Sidebar from './components/Sidebar'
import posts from './data/posts.json'

import './App.css'

function App() {
    const [selectedUser, setSelectedUser] = useState(null)
    const [following, setFollowing] = useState([])

    function handleFollow(userId) {
        setFollowing((current) => {
            if (current.includes(userId)) {
                return current.filter((id) => id !== userId)
            }

            return [...current, userId]
        })
    }

    function handleUserClick(user) {
        setSelectedUser(user)
    }

    function handleBack() {
        setSelectedUser(null)
    }

    const isFollowing = selectedUser
        ? following.includes(selectedUser.id)
        : false

    return (
        <div className="app">

            <Header />

            {selectedUser ? (

                <div className="profile-page">

                    <button
                        className="profile-back"
                        type="button"
                        onClick={handleBack}
                    >
                        ← Voltar
                    </button>

                    <div className="profile-header">

                        <img
                            src={selectedUser.avatar}
                            alt={`Foto de ${selectedUser.username}`}
                        />

                        <div className="profile-info">

                            <div className="profile-top">

                                <h1>
                                    @{selectedUser.username}
                                </h1>

                                <button
                                    type="button"
                                    className={`profile-follow ${
                                        isFollowing ? 'following' : ''
                                    }`}
                                    onClick={() =>
                                        handleFollow(selectedUser.id)
                                    }
                                >
                                    {isFollowing
                                        ? 'Seguindo'
                                        : 'Seguir'}
                                </button>

                            </div>

                            <div className="profile-stats">

                                <span>
                                    <strong>
                                        {selectedUser.followers +
                                            (isFollowing ? 1 : 0)}
                                    </strong>
                                    {' '}seguidores
                                </span>

                                <span>
                                    <strong>
                                        {selectedUser.following}
                                    </strong>
                                    {' '}seguindo
                                </span>

                            </div>

                            <strong>
                                {selectedUser.name}
                            </strong>

                            <p>
                                {selectedUser.bio}
                            </p>

                        </div>

                    </div>

                </div>

            ) : (

                <>
                    <Reviews />

                    <div className="main-layout">

                        <main
                            className="feed"
                            aria-label="Feed de publicações"
                        >
                            {posts.map((post) => (
                                <Post
                                    key={post.id}
                                    post={post}
                                />
                            ))}
                        </main>

                        <Sidebar
                            following={following}
                            onFollow={handleFollow}
                            onUserClick={handleUserClick}
                        />

                    </div>
                </>

            )}

            <nav
                className="mobile-nav"
                aria-label="Navegação móvel"
            >
                <button type="button" aria-label="Início">
                    <FiHome />
                </button>

                <button type="button" aria-label="Pesquisar">
                    <FiSearch />
                </button>

                <button
                    type="button"
                    aria-label="Criar publicação"
                >
                    <FiPlusSquare />
                </button>

                <button
                    type="button"
                    aria-label="Atividades"
                >
                    <FiHeart />
                </button>

                <button
                    type="button"
                    aria-label="Perfil"
                >
                    <FiUser />
                </button>
            </nav>

        </div>
    )
}

export default App