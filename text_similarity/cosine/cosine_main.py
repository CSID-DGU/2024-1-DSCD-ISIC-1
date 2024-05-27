from cosine_module import *

import pandas as pd
import numpy as np

df = pd.read_csv(".csv", encoding = "cp949") # 선배 데이터 가져오기
resume = df.copy()
resume.drop(columns=["직무"], inplace=True)

# 필요에 따라 아래는 삭제 / 사람 이름 따로 설정
resume["이름"] = "한종원" 


# input 값들
comparison_values = {
    "주전공": "산업시스템공학",
    "복수전공": "데이터사이언스연계전공",
    "학점": "3.5",
    "활용 스킬": "Python, C++",
    "수상 내역": "데이터분석 관련",
    "동아리": "백엔드 관련",
    "프로젝트": "Project1"
}

# null 값이 있는 열을 제외한 비교 값
comparison_values_non_null = {key : value for key, value in comparison_values.items() if value}

# 각 열 embedding
columns_to_embed = [column for column in comparison_values_non_null.keys()]
for column in columns_to_embed:
    resume[column + "_embedding"] = resume[column].apply(lambda x: get_embedding(str(x)) if pd.notnull(x) else np.nan)

# input embedding
comparison_embeddings = {key: get_embedding(str(value)) for key, value in comparison_values_non_null.items()}

# cosine 계산
for column in columns_to_embed:
    def calculate_similarity(row, column):
        embedding = row[column + "_embedding"]
        if isinstance(embedding, float) and np.isnan(embedding):
            return np.nan
        return calculate_cosine_similarity(embedding, comparison_embeddings[column])

    resume[column + "_cosine_similarity"] = resume.apply(lambda row: calculate_similarity(row, column), axis=1)

# 유사도 출력
for index, row in resume.iterrows():
    print(f"Row {index + 1}:")
    for column in columns_to_embed:
        similarity_score = row[column + "_cosine_similarity"]
        if pd.notnull(similarity_score):
            print(f"  {column} 유사도: {similarity_score:.4f}")

# 각 열의 코사인 유사도의 합 계산 (null 값 제외)
resume["similarity_sum"] = resume[[col + "_cosine_similarity" for col in columns_to_embed]].sum(axis=1, skipna=True)

# 상위 3개의 유사도 추출
top3_similar = resume.nlargest(3, "similarity_sum")[["이름", "similarity_sum"]]
print(top3_similar)
