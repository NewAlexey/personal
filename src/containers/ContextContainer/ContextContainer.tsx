import React, { useRef, useState } from "react";

import { useAppContextProvider } from "src/context/AppContext";
import { Button, Input, Text } from "src/components/library";
import { radioList, textSizes, textWeight } from "utils/constants";
import { useAnimationFrame } from "utils/hooks";
import * as Styled from "./Style";
import Container from "../Container";

export const ContextContainer = (): JSX.Element => {
    const {
        appContextValue,
        setDelayValue,
        updateContextValue1,
        updateContextValue2,
        asyncUpdateContextValue,
    } = useAppContextProvider();
    const [newValue, setNewValue] = useState<string>("");
    const [isAnimate, setIsAnimate] = useState(false);

    const MAX_PROGRESS_WIDTH = 100;
    const progressStart = useRef(0);
    const progressRef = useRef<HTMLDivElement>(null);

    const step = (timestamp: number) => {
        if (!progressStart.current) {
            progressStart.current = timestamp;
        }

        const progress = timestamp - progressStart.current;
        const animationProgress = Math.min(
            progress / (Number(appContextValue.selectedDelayValue) / 100),
            MAX_PROGRESS_WIDTH,
        );

        if (progressRef.current) {
            progressRef.current.style.width = `${animationProgress}%`;
        }
    };

    useAnimationFrame(step, isAnimate, progressStart);

    return (
        <Container>
            <Styled.InnerWrapper>
                <h2>Example Page</h2>
                <Styled.ContentContainer>
                    <Input
                        value={newValue}
                        onChange={
                            (event: React.ChangeEvent<HTMLInputElement>) =>
                                setNewValue(event.target.value)
                        }
                    />
                    <Styled.BlockWrapper>
                        <Styled.TextContainer>
                            <Text value="Value 1 -" />
                            <Styled.ValueWrapper>
                                <Text
                                    size={textSizes.regular}
                                    weight={textWeight.bold}
                                    value={appContextValue.value1}
                                />
                            </Styled.ValueWrapper>
                        </Styled.TextContainer>
                        <Button
                            disabled={Boolean(!newValue.length)}
                            onClick={() => {
                                updateContextValue1(newValue);
                                setNewValue("");
                            }}
                        >
                            <Text value="Update Value 1" />
                        </Button>
                    </Styled.BlockWrapper>

                    <Styled.BlockWrapper>
                        <Styled.TextContainer>
                            <Text value="Value 2 -" />
                            <Styled.ValueWrapper>
                                <Text
                                    size={textSizes.regular}
                                    weight={textWeight.bold}
                                    value={appContextValue.value2}
                                />
                            </Styled.ValueWrapper>
                        </Styled.TextContainer>
                        <Button
                            disabled={Boolean(!newValue.length)}
                            onClick={() => {
                                updateContextValue2(newValue);
                                setNewValue("");
                            }}
                        >
                            <Text value="Update Value 2" />
                        </Button>
                    </Styled.BlockWrapper>

                    <Styled.BlockWrapper>
                        <Styled.TextContainer>
                            <Text value="Async value -" />
                            <Styled.ValueWrapper>
                                <Text
                                    size={textSizes.regular}
                                    weight={textWeight.bold}
                                    value={appContextValue.asyncValue}
                                />
                            </Styled.ValueWrapper>
                        </Styled.TextContainer>
                        <Styled.ProgressBar>
                            <Styled.FakeProgressBar ref={progressRef} />
                            <Styled.CustomText
                                size={textSizes.regular}
                                weight={textWeight.bold}
                                value="Slow by"
                            />
                        </Styled.ProgressBar>
                        {radioList.map(({
                            id,
                            delayValue,
                            text,
                        }) => (
                            <Styled.RadioInputGroup key={id}>
                                <Input
                                    type="radio"
                                    name="timeout"
                                    id={id}
                                    value={delayValue}
                                    checked={appContextValue.selectedDelayValue === delayValue}
                                    onChange={() => setDelayValue(delayValue)}
                                />
                                <label htmlFor={id}>{text}</label>
                            </Styled.RadioInputGroup>
                        ))}
                        <Button
                            disabled={Boolean(!newValue.length)}
                            onClick={() => {
                                asyncUpdateContextValue(
                                    newValue,
                                    Number(appContextValue.selectedDelayValue),
                                );
                                setNewValue("");
                                setIsAnimate(true);
                                setTimeout(async () => {
                                    await setIsAnimate(false);
                                    if (progressRef.current) {
                                        progressRef.current.style.width = "0";
                                    }
                                }, Number(appContextValue.selectedDelayValue));
                            }}
                        >
                            <Text value="Update Async" />
                        </Button>
                    </Styled.BlockWrapper>
                </Styled.ContentContainer>
            </Styled.InnerWrapper>
        </Container>
    );
};
