import React, { useEffect, useRef, useState } from "react";

import {
    Button,
    Heading,
    HeadingSizeEnum,
    Text,
    TextField,
} from "src/components/library";
import { useAnimationFrame } from "src/shared/hooks";
import {
    TextSizeEnum,
    TextWeightEnum,
} from "src/components/library/Text/interfaces";
import * as Styled from "src/modules/ContextModule/style";
import { useExperimentalContextProvider } from "src/context";
import { radioList } from "src/context/ExperimentalContext/constants";

export const ContextModule = (): JSX.Element => {
    const {
        experimentalContextValue,
        setDelayValue,
        updateContextValue1,
        updateContextValue2,
        asyncUpdateContextValue,
    } = useExperimentalContextProvider();
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
            progress / (Number(experimentalContextValue.selectedDelayValue) / 100),
            MAX_PROGRESS_WIDTH,
        );

        if (progressRef.current) {
            progressRef.current.style.width = `${animationProgress}%`;
        }
    };

    useAnimationFrame(step, isAnimate, progressStart);

    useEffect(() => {
        if (!isAnimate && progressRef.current) {
            progressRef.current.style.width = "0";
        }
    }, [isAnimate]);

    return (
        <Styled.InnerWrapper>
            <Heading
                value="Example Page"
                as="h2"
                size={HeadingSizeEnum.h2}
            />
            <Styled.ContentContainer>
                <TextField
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
                                size={TextSizeEnum.regular}
                                weight={TextWeightEnum.bold}
                                value={experimentalContextValue.value1}
                            />
                        </Styled.ValueWrapper>
                    </Styled.TextContainer>
                    <Button
                        disabled={Boolean(!newValue.length)}
                        onClick={() => {
                            updateContextValue1(newValue);
                            setNewValue("");
                        }}
                        text="Update Value 1"
                    />
                </Styled.BlockWrapper>

                <Styled.BlockWrapper>
                    <Styled.TextContainer>
                        <Text value="Value 2 -" />
                        <Styled.ValueWrapper>
                            <Text
                                size={TextSizeEnum.regular}
                                weight={TextWeightEnum.bold}
                                value={experimentalContextValue.value2}
                            />
                        </Styled.ValueWrapper>
                    </Styled.TextContainer>
                    <Button
                        disabled={Boolean(!newValue.length)}
                        onClick={() => {
                            updateContextValue2(newValue);
                            setNewValue("");
                        }}
                        text="Update Value 2"
                    />
                </Styled.BlockWrapper>

                <Styled.BlockWrapper>
                    <Styled.TextContainer>
                        <Text value="Async value -" />
                        <Styled.ValueWrapper>
                            <Text
                                size={TextSizeEnum.regular}
                                weight={TextWeightEnum.bold}
                                value={experimentalContextValue.asyncValue}
                            />
                        </Styled.ValueWrapper>
                    </Styled.TextContainer>
                    <Styled.ProgressBar>
                        <Styled.FakeProgressBar ref={progressRef} />
                        <Styled.CustomText
                            size={TextSizeEnum.regular}
                            weight={TextWeightEnum.bold}
                            value="Slow by"
                        />
                    </Styled.ProgressBar>
                    {radioList.map(({
                        id,
                        delayValue,
                        text,
                    }) => (
                        <Styled.RadioInputGroup key={id}>
                            <TextField
                                type="radio"
                                name="timeout"
                                id={id}
                                value={delayValue}
                                checked={experimentalContextValue.selectedDelayValue === delayValue}
                                onChange={() => setDelayValue(delayValue)}
                                labelAfter={text}
                            />
                        </Styled.RadioInputGroup>
                    ))}
                    <Button
                        text="Update Async"
                        disabled={Boolean(!newValue.length)}
                        onClick={async () => {
                            setIsAnimate(true);
                            await asyncUpdateContextValue(
                                newValue,
                                Number(experimentalContextValue.selectedDelayValue),
                            );
                            setNewValue("");
                            setIsAnimate(false);
                        }}
                    />
                </Styled.BlockWrapper>
            </Styled.ContentContainer>
        </Styled.InnerWrapper>
    );
};
