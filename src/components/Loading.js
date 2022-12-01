import styled from 'styled-components';

const Loading = () => {
    return (
        <div>
            <SetLoading>
            <h1>Loading...</h1>
            <div className="spinner"></div>
            </SetLoading>
        </div>
    )
}

const SetLoading = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;

    @keyframes spinner {
        from {transform: rotate(0deg); }
        to {transform: rotate(360deg);}
      }

    h1 {
        position: absolute;
        top: 65%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
    }

    .spinner {
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 64px;
        height: 64px;
        margin-top: -32px;
        margin-left: -32px;
        border-radius: 50%;
        border: 8px solid transparent;
        border-top-color: #500089;
        border-bottom-color: #500089;
        animation: spinner .8s ease infinite;
    }
`

export default Loading;